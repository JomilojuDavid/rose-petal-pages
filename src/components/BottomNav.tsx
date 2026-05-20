import { Home, Play, Mic, Heart } from "lucide-react";

export type TabKey = "wishes" | "videos" | "voice" | "foryou";

const items: { key: TabKey; label: string; Icon: typeof Home }[] = [
  { key: "wishes", label: "Wishes", Icon: Home },
  { key: "videos", label: "Videos", Icon: Play },
  { key: "voice", label: "Voice Notes", Icon: Mic },
  { key: "foryou", label: "For You", Icon: Heart },
];

export function BottomNav({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (k: TabKey) => void;
}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-pink-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-xl items-stretch justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
        {items.map(({ key, label, Icon }) => {
          const isActive = key === active;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className="group flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 transition-colors"
              aria-label={label}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                className={`h-6 w-6 transition-all ${
                  isActive
                    ? "scale-110 text-pink-600 [stroke-width:2.4]"
                    : "text-pink-400 group-hover:text-pink-500"
                }`}
                fill={isActive && key === "foryou" ? "currentColor" : "none"}
              />
              <span
                className={`text-[10px] font-medium tracking-wide transition-colors ${
                  isActive ? "text-pink-600" : "text-pink-400/80"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
