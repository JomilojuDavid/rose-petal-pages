import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BottomNav, type TabKey } from "../components/BottomNav";
import { WishesTab } from "../components/tabs/WishesTab";
import { VideosTab } from "../components/tabs/VideosTab";
import { VoiceNotesTab } from "../components/tabs/VoiceNotesTab";
import { ForYouTab } from "../components/tabs/ForYouTab";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [tab, setTab] = useState<TabKey>("wishes");

  return (
    <div className="min-h-screen bg-background">
      {tab === "wishes" && <WishesTab />}
      {/* Videos mounted always (when chosen) full-screen; render conditionally so audio resets */}
      {tab === "videos" && <VideosTab visible={true} />}
      {tab === "voice" && <VoiceNotesTab />}
      {tab === "foryou" && <ForYouTab />}
      <BottomNav active={tab} onChange={setTab} />
    </div>
  );
}
