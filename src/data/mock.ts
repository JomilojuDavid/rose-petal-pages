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
  duration?: number;
};

export type VoiceNote = {
  id: string;
  name: string;
  avatar: string;
  src: string;
  duration: string;
};

const av = (seed: string) =>
  `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(seed)}&backgroundColor=fce7f3,fbcfe8,fda4af`;

export const WISHES: Wish[] = [
  {
    id: "w1",
    name: "Jummy",
    handle: "@jummy",
    avatar: av("jummy"),
    message:
      "Happy birthday, my love. May this year wrap you in every soft thing you've prayed for — slow mornings, full laughter, and people who choose you on purpose. I love you endlessly.",
    likes: 142,
    timeAgo: "2h",
  },
  {
    id: "w2",
    name: "Bolade",
    handle: "@bolade",
    avatar: av("bolade"),
    message:
      "To the kindest soul in my corner — happy birthday. Watching you grow into yourself has been one of the quiet privileges of my life. Cheers to a year that finally meets you where you are. 🌸",
    likes: 98,
    timeAgo: "5h",
  },
  {
    id: "w3",
    name: "Kusibe",
    handle: "@kusibe",
    avatar: av("kusibe"),
    message:
      "Another year of you in this world is another year of the rest of us being lucky. Happy birthday, darling. May God bless every door you walk through this year.",
    likes: 76,
    timeAgo: "9h",
  },
];

export const VIDEOS: VideoClip[] = [
  { id: "v1", name: "Anty Tolu", avatar: av("tolu"), src: "/media/Anty_Tolu.mp4" },
  { id: "v2", name: "Anty Tope", avatar: av("tope"), src: "/media/Anty_Tope.mp4" },
  { id: "v3", name: "Anty Yemi", avatar: av("yemi"), src: "/media/Anty_Yemi.mp4" },
  { id: "v4", name: "Folasade", avatar: av("folasade"), src: "/media/Folasade.mp4" },
  { id: "v5", name: "Idowu", avatar: av("idowu"), src: "/media/Idowu.mp4" },
  { id: "v6", name: "Mummy Alvin", avatar: av("mummyalvin"), src: "/media/Mummy_Alvin.mp4" },
];

export const VOICE_NOTES: VoiceNote[] = [
  { id: "a1", name: "Mom", avatar: av("mom"), src: "/media/Mummy.mp3", duration: "" },
  { id: "a2", name: "Dad", avatar: av("dad"), src: "/media/Daddy.mp3", duration: "" },
  { id: "a3", name: "Mercy Edebo", avatar: av("mercy"), src: "/media/Mercy_Edebo.mp3", duration: "" },
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
