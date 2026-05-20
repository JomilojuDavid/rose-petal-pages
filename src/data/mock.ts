export type Wish = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  message: string;
  likes: number;
  timeAgo: string;
};

export type VideoClip = {
  id: string;
  name: string;
  avatar: string;
  src: string;
  duration?: number; // seconds, optional fallback
};

export type VoiceNote = {
  id: string;
  name: string;
  avatar: string;
  src: string;
  duration: string; // mm:ss
};

const av = (seed: string) =>
  `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(seed)}&backgroundColor=fce7f3,fbcfe8,fda4af`;

export const WISHES: Wish[] = [
  {
    id: "w1",
    name: "Mom",
    handle: "@mom",
    avatar: av("mom"),
    message:
      "Happy birthday, my darling girl. From the second you arrived, you made the whole world softer. I love you more than every sunrise I've ever seen.",
    likes: 124,
    timeAgo: "2h",
  },
  {
    id: "w2",
    name: "Sophia",
    handle: "@sophiabells",
    avatar: av("sophia"),
    message:
      "To the brightest soul I know — may this year be filled with golden mornings, slow coffees, and every dream you've quietly been holding onto. Love you endlessly. 🌷",
    likes: 89,
    timeAgo: "4h",
  },
  {
    id: "w3",
    name: "Daniel",
    handle: "@dan.k",
    avatar: av("daniel"),
    message:
      "Another trip around the sun for the kindest person in the group chat. Cake is on me. Always.",
    likes: 47,
    timeAgo: "6h",
  },
  {
    id: "w4",
    name: "Aunt Rosa",
    handle: "@rosa",
    avatar: av("rosa"),
    message:
      "Wishing you a year as beautiful and stubborn as you are, my love. Hug your mother for me.",
    likes: 31,
    timeAgo: "8h",
  },
  {
    id: "w5",
    name: "Maya",
    handle: "@mayaa",
    avatar: av("maya"),
    message:
      "Best friend, soulmate, emergency contact — happy birthday to the person who has held my hand through every version of myself.",
    likes: 212,
    timeAgo: "10h",
  },
  {
    id: "w6",
    name: "Lucas",
    handle: "@lucasr",
    avatar: av("lucas"),
    message:
      "You make ordinary days feel like soft pink afternoons. Happy birthday. The world is luckier with you in it.",
    likes: 64,
    timeAgo: "12h",
  },
];

// Public sample videos (Google's gtv-videos-bucket). Vertical-ish framing works in container.
export const VIDEOS: VideoClip[] = [
  {
    id: "v1",
    name: "Mom & Dad",
    avatar: av("parents"),
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "v2",
    name: "Maya",
    avatar: av("maya"),
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "v3",
    name: "The Squad",
    avatar: av("squad"),
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "v4",
    name: "Sophia",
    avatar: av("sophia"),
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
];

// Public sample audio clips
export const VOICE_NOTES: VoiceNote[] = [
  {
    id: "a1",
    name: "Mom",
    avatar: av("mom"),
    src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_8f60f8e7ad.mp3?filename=birthday-101218.mp3",
    duration: "0:18",
  },
  {
    id: "a2",
    name: "Maya",
    avatar: av("maya"),
    src: "https://cdn.pixabay.com/download/audio/2021/10/19/audio_a0e0c5f2d4.mp3?filename=happy-birthday-to-you-9095.mp3",
    duration: "0:24",
  },
  {
    id: "a3",
    name: "Sophia",
    avatar: av("sophia"),
    src: "https://cdn.pixabay.com/download/audio/2022/10/26/audio_31a4b2f0b7.mp3?filename=happy-birthday-125301.mp3",
    duration: "0:22",
  },
  {
    id: "a4",
    name: "Daniel",
    avatar: av("daniel"),
    src: "https://cdn.pixabay.com/download/audio/2023/06/12/audio_d09d8ce4f7.mp3?filename=birthday-150935.mp3",
    duration: "0:15",
  },
];

export const EPISTLE = {
  title: "For You, On Your Day",
  dateline: "Written with a soft heart, by me — May 20th",
  paragraphs: [
    "There are people who walk into a room and quietly rearrange it. You are one of them. I noticed it the first time, and I notice it still — the way the air shifts a little kinder when you arrive.",
    "I have been trying for days to choose the right words for this letter, and I have learned something writing it: there is no single sentence that carries you. You are too much light to be folded into a paragraph.",
    "So instead, here are the small things. The way you laugh halfway through your own jokes. The way you remember everyone's coffee order, including the ones you pretend not to. The way you cry at the end of films and refuse to admit it. The way you love — loud, and stubborn, and full.",
    "This year I want everything for you. Quiet mornings that feel like a held breath. Long evenings with people who deserve you. Work that surprises you. Rest that finds you before you ask. Joy that is yours to keep.",
    "If I could give you a single gift it would be this: a year of being met. Met by friends, by mornings, by yourself — fully, the way you meet the rest of us every single day.",
    "Happy birthday, my favorite person. Thank you for being exactly who you are. I am, always, so proud to know you.",
  ],
  signoff: "— Yours, today and the rest of the days",
};
