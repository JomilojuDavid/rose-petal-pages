// Tiny global coordinator so videos and voice notes never overlap.
type Kind = "video" | "voice";
type Listener = (active: Kind | null) => void;

let active: Kind | null = null;
const listeners = new Set<Listener>();

export function setActiveMedia(kind: Kind | null) {
  active = kind;
  listeners.forEach((l) => l(active));
}

export function subscribe(l: Listener) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function getActiveMedia() {
  return active;
}
