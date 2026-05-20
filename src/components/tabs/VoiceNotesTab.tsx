import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { VOICE_NOTES } from "../../data/mock";
import { setActiveMedia, subscribe } from "../../lib/playback";

const BAR_COUNT = 32;
// Deterministic-ish waveform heights
const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
  const v = Math.sin(i * 0.7) * 0.5 + Math.cos(i * 0.31) * 0.3 + 0.6;
  return Math.max(0.25, Math.min(1, Math.abs(v)));
});

function VoiceBubble({
  note,
  playingId,
  setPlayingId,
}: {
  note: (typeof VOICE_NOTES)[number];
  playingId: string | null;
  setPlayingId: (id: string | null) => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(note.duration);
  const isPlaying = playingId === note.id;

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onMeta = () => {
      if (a.duration && isFinite(a.duration)) {
        const m = Math.floor(a.duration / 60);
        const s = Math.floor(a.duration % 60).toString().padStart(2, "0");
        setDuration(`${m}:${s}`);
      }
    };
    a.addEventListener("loadedmetadata", onMeta);
    return () => a.removeEventListener("loadedmetadata", onMeta);
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      setActiveMedia("voice");
      a.play().catch(() => {});
    } else {
      a.pause();
    }
  }, [isPlaying]);

  // Subscribe so external (video) playback stops us
  useEffect(() => {
    return subscribe((active) => {
      if (active !== "voice" && isPlaying) {
        audioRef.current?.pause();
        setPlayingId(null);
      }
    }) as unknown as () => void;
  }, [isPlaying, setPlayingId]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      if (a.duration && !isNaN(a.duration)) {
        setProgress(a.currentTime / a.duration);
      }
    };
    const onEnd = () => {
      setPlayingId(null);
      setProgress(0);
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("ended", onEnd);
    };
  }, [setPlayingId]);

  const filledIdx = Math.floor(progress * BAR_COUNT);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2 pl-2">
        <img
          src={note.avatar}
          alt={note.name}
          className="h-6 w-6 rounded-full border border-pink-200 bg-pink-50"
        />
        <p className="text-sm font-semibold text-neutral-900">{note.name}</p>
      </div>
      <div className="pink-shadow flex items-center gap-3 rounded-[28px] bg-gradient-to-br from-pink-500 to-rose-500 px-3 py-3 pr-5">
        <button
          onClick={() => setPlayingId(isPlaying ? null : note.id)}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-pink-600 shadow-md transition active:scale-95"
        >
          {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
        </button>

        <div className="flex flex-1 items-center gap-[3px]">
          {bars.map((h, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full transition-colors"
              style={{
                height: `${Math.round(h * 28)}px`,
                backgroundColor:
                  i < filledIdx ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </div>

        <span className="ml-1 shrink-0 text-xs font-medium tabular-nums text-white/90">
          {note.duration}
        </span>
        <audio ref={audioRef} src={note.src} preload="metadata" />
      </div>
    </div>
  );
}

export function VoiceNotesTab() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-xl px-4 pb-28 pt-6">
      <header className="mb-6 flex items-baseline justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-pink-600">
          Voice Notes
        </h1>
        <span className="text-xs text-pink-500/80">
          {VOICE_NOTES.length} whispers for you
        </span>
      </header>
      <div className="flex flex-col gap-6">
        {VOICE_NOTES.map((n) => (
          <VoiceBubble
            key={n.id}
            note={n}
            playingId={playingId}
            setPlayingId={setPlayingId}
          />
        ))}
      </div>
    </div>
  );
}
