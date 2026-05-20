import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { WISHES } from "../../data/mock";

function WishCard({ wish }: { wish: (typeof WISHES)[number] }) {
  const [liked, setLiked] = useState(false);
  const count = wish.likes + (liked ? 1 : 0);

  return (
    <article className="pink-shadow overflow-hidden rounded-2xl bg-white">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 py-3">
        <div className="rounded-full bg-gradient-to-tr from-pink-400 via-rose-400 to-pink-600 p-[2px]">
          <img
            src={wish.avatar}
            alt={wish.name}
            className="h-10 w-10 rounded-full border-2 border-white bg-pink-50 object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-neutral-900">
            {wish.name}
          </p>
          <p className="truncate text-xs text-pink-500/80">{wish.handle}</p>
        </div>
        <span className="text-[11px] text-neutral-400">{wish.timeAgo}</span>
      </header>

      {/* Body */}
      <div className="px-5 pb-2">
        <p className="text-[15px] leading-relaxed text-neutral-800">
          {wish.message}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 px-4 py-3">
        <button
          onClick={() => setLiked((v) => !v)}
          aria-label="Like"
          className="transition-transform active:scale-90"
        >
          <Heart
            className={`h-6 w-6 transition-colors ${
              liked
                ? "fill-pink-600 text-pink-600"
                : "text-neutral-700 hover:text-pink-500"
            }`}
          />
        </button>
        <MessageCircle className="h-6 w-6 text-neutral-700" />
        <Send className="h-6 w-6 text-neutral-700" />
        <div className="flex-1" />
        <Bookmark className="h-6 w-6 text-neutral-700" />
      </div>
      <div className="px-5 pb-4 text-xs font-semibold text-neutral-800">
        {count.toLocaleString()} likes
      </div>
    </article>
  );
}

export function WishesTab() {
  return (
    <div className="mx-auto max-w-xl px-4 pb-28 pt-6">
      <header className="mb-6 flex items-baseline justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-pink-600">
          Wishes
        </h1>
        <span className="text-xs text-pink-500/80">
          {WISHES.length} from people who love you
        </span>
      </header>
      <div className="flex flex-col gap-5">
        {WISHES.map((w) => (
          <WishCard key={w.id} wish={w} />
        ))}
      </div>
    </div>
  );
}
