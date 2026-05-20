import { useEffect, useRef, useState, useCallback } from "react";
import { VIDEOS } from "../../data/mock";
import { setActiveMedia, subscribe } from "../../lib/playback";
import { Volume2, VolumeX } from "lucide-react";

const SEGMENT_FALLBACK_MS = 6000;

export function VideosTab({ visible }: { visible: boolean }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1 of current
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const holdTimer = useRef<number | null>(null);
  const isHolding = useRef(false);
  const rafRef = useRef<number | null>(null);
  const fallbackStart = useRef<number>(0);

  const current = VIDEOS[index];

  // Mark this tab as active media when visible & playing
  useEffect(() => {
    if (!visible) return;
    setActiveMedia("video");
    const off = subscribe((a) => {
      if (a !== "video") {
        const v = videoRefs.current[index];
        v?.pause();
      }
    });
    return () => {
      off();
    };
  }, [visible, index]);

  // Pause everything when leaving the tab
  useEffect(() => {
    if (!visible) {
      videoRefs.current.forEach((v) => v?.pause());
    }
  }, [visible]);

  const playCurrent = useCallback(() => {
    const v = videoRefs.current[index];
    if (!v) return;
    v.muted = muted;
    v.currentTime = 0;
    setActiveMedia("video");
    v.play().catch(() => {});
    fallbackStart.current = performance.now();
  }, [index, muted]);

  // Play on index change / visibility
  useEffect(() => {
    if (!visible) return;
    setProgress(0);
    playCurrent();
    // pause others
    videoRefs.current.forEach((v, i) => {
      if (i !== index) {
        v?.pause();
        if (v) v.currentTime = 0;
      }
    });
  }, [index, visible, playCurrent]);

  // Progress loop
  useEffect(() => {
    if (!visible) return;
    const tick = () => {
      const v = videoRefs.current[index];
      if (v && v.duration && !isNaN(v.duration) && v.duration > 0) {
        setProgress(Math.min(1, v.currentTime / v.duration));
      } else {
        const elapsed = performance.now() - fallbackStart.current;
        setProgress(Math.min(1, elapsed / SEGMENT_FALLBACK_MS));
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [index, visible, paused]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % VIDEOS.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + VIDEOS.length) % VIDEOS.length);
  }, []);

  // Auto-advance on end
  const onEnded = () => next();

  // Touch / mouse handlers
  const onPointerDown = (e: React.PointerEvent) => {
    isHolding.current = false;
    holdTimer.current = window.setTimeout(() => {
      isHolding.current = true;
      const v = videoRefs.current[index];
      v?.pause();
      setPaused(true);
    }, 220);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    if (isHolding.current) {
      const v = videoRefs.current[index];
      v?.play().catch(() => {});
      setPaused(false);
      isHolding.current = false;
      return;
    }
    // Tap zones
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;
    if (ratio >= 0.7) next();
    else if (ratio <= 0.3) prev();
    // middle 40%: ignore
  };

  return (
    <div className="fixed inset-0 z-10 bg-black">
      {/* Videos stack */}
      {VIDEOS.map((clip, i) => (
        <video
          key={clip.id}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          src={clip.src}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          playsInline
          muted={muted}
          preload={Math.abs(i - index) <= 1 ? "auto" : "metadata"}
          onEnded={i === index ? onEnded : undefined}
        />
      ))}

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/70" />

      {/* Tap layer */}
      <div
        className="absolute inset-0 select-none touch-none"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          if (holdTimer.current) clearTimeout(holdTimer.current);
        }}
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Top progress bars */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex gap-1 px-3 pt-3">
        {VIDEOS.map((_, i) => {
          const fill =
            i < index ? 1 : i === index ? progress : 0;
          return (
            <div
              key={i}
              className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30"
            >
              <div
                className="h-full bg-pink-500"
                style={{
                  width: `${fill * 100}%`,
                  transition: i === index ? "none" : "width 0.2s linear",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Header */}
      <div className="pointer-events-none absolute left-0 right-0 top-7 z-20 flex items-center gap-3 px-4 pt-2">
        <img
          src={current.avatar}
          alt={current.name}
          className="h-9 w-9 rounded-full border-2 border-white/80 bg-pink-100 object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white drop-shadow">
            {current.name}
          </p>
          <p className="text-xs text-white/70">birthday wish · video</p>
        </div>
        <button
          className="pointer-events-auto rounded-full bg-black/40 p-2 text-white backdrop-blur"
          onClick={(e) => {
            e.stopPropagation();
            setMuted((m) => !m);
          }}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      {/* Paused indicator */}
      {paused && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div className="rounded-full bg-black/40 px-4 py-1.5 text-xs uppercase tracking-widest text-white backdrop-blur">
            Paused
          </div>
        </div>
      )}
    </div>
  );
}
