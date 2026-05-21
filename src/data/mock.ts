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
      "Happy 26th Birthday my dear big sister 🎉❤️\n\nToday I thank God for your life and for the blessing you have been to me and everyone around you. You have always been more than a sister to me — you are a guide, a supporter, and someone whose strength and kindness I truly admire. I’m so grateful to have you in my life.\n\nAs you celebrate your 26th year, I pray that God continues to protect you, guide your steps, and fill your life with peace, joy, and success. May every dream in your heart begin to come true, and may this new age open doors of favor, opportunities, and endless blessings for you.\n\nMay your days be filled with happiness, your path be bright, and your heart always be at peace. Thank you for being such an amazing sister. I love you so much and I’m always proud of you.\n\nHappy Birthday once again. May God bless your new age abundantly. 🙏✨",
    likes: 142,
    timeAgo: "2h",
  },
  {
    id: "w2",
    name: "Bolade",
    handle: "@bolade",
    avatar: av("bolade"),
    message:
      "Happy birthday to my amazing big sister ❤️\n\nYou’ve been more than just a sister to me—you’ve been my guide, my protector, my safe place, and one of the strongest people I know. Through every season of life, your love has remained constant, and I’m forever grateful for you. I may not say it all the time, but you mean so much to me, and I’m blessed to call you my sister.\n\nOn your special day, I pray that God surrounds you with peace, fills your heart with joy, and grants you success in everything you lay your hands on. May your life be full of laughter, good health, and endless blessings. May every silent prayer in your heart be answered, and may you never lack anything good.\n\nThank you for being you—for your love, your strength, and your beautiful heart. I love you deeply, today and always. Happy birthday, my dearest sister 🎉💖",
    likes: 98,
    timeAgo: "5h",
  },
  {
    id: "w3",
    name: "Kusibe",
    handle: "@kusibe",
    avatar: av("kusibe"),
    message:
      "Happy birthday to my amazing big sister my first best friend and my forever partner in crime thanks for always having my back and for not exposing my secrets i hope your day is as awesome as you are i love you 😘💖💕",
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
  dateline: "Written with a full heart, by me — March 28th",
  paragraphs: [
    "Happy birthday to the woman who makes every day feel like a masterpiece.",
    "I’ve spent time, days, weeks and months just thinking about what to say 😂😂, and honestly, words don’t feel like enough. Because how do you fully explain what it means to have someone like you in your life?",
    "You are soft in the most powerful and scary way, strong in ways most people don’t even see, and loving in a way that has changed me. You’ve been patient with me in seasons where I didn’t even understand myself.",
    "My prayer for you as you enter this new year is that you continue to grow in grace and strength, and that you always remain the kind, beautiful soul I fell in love with. May your heart always be a place of peace, and may your goodness continue to touch everyone around you.",
    "I know I haven’t always been easy to love. With my coconut head 😔, There were moments when I was at my lowest, struggling to get things right, and failing time and time again. I know the constant disappointments and the weight of my own life journey often spilled over, stressing you emotionally and testing your patience in ways I never intended. But you? You never left. You didn't abandon me when it would have been so much easier to walk away. You stayed, you believed in me when I couldn't even believe in myself, and you loved me through the mess. I can never thank you enough for that kind of loyalty, it’s the rarest kind I’ve ever known and its scary cos tell me why most time I wonder what exactly you see in me.",
    "I pray you remain the absolute incredible, smart, 'good woman' you are, woman full of grace, wisdom, and an unwavering spirit. May this new year bring you the kind of peace and joy you’ve given me, and may I spend every day of it trying to be the man you deserve.",
    "JSYK 😚 I carry you in my heart with pride, and I cherish you more than I can ever fully express.",
    "Happy Birthday, my queen 👑",
    "I love you… more than words will ever be able to explain.",
    "More sense, more money, more happiness and less ijogbon and please try your best to listen to what i say small this year ehn.",
    "I LOVE YOU LOUDLY BABY ❤️",
  ],
  signoff: "— Yours, today and the rest of the days",
};
