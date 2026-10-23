interface Paths {
  title: string;
  emoji: string;
  paths: [string, string][];
}

export default [
  {
    title: "About",
    emoji: "👤",
    paths: [
      ["Home Page", "/"],
      ["Career Summary", "/about_me/career_summary"],
      ["Academic Papers", "/about_me/papers"],
    ],
  },
  {
    title: "Portfolio",
    emoji: "💼",
    paths: [
      ["Awards", "/portfolio/awards"],
      ["Leetcode", "/portfolio/leetcode"],
    ],
  },
  {
    title: "Classes",
    emoji: "🎓",
    paths: [
      ["Graphics", "/classes/computer_graphics"],
      ["C++", "/classes/cpp"],
      ["Architecture", "/classes/architecture"],
      ["Database 1", "/classes/database"],
      ["Python", "/classes/py"],
      ["Languages", "/classes/programming_languages"],
      ["AI", "/classes/ai"],
    ],
  },
  {
    title: "etc.",
    emoji: "⛳",
    paths: [
      ["Minecraft Map", "/etc/minecraft_map"],
      ["My Meme", "/etc/meme"],
    ],
  },
] as Paths[];
