interface Paths {
  title: string;
  emoji: string;
  paths: [string, string][]; 
}

export default [
  {
    title: "About Me",
    emoji: "👤",
    paths: [
      ['Home Page', '/'],
      ['Career Summary', '/about_me/career_summary'],
      ['Academic Papers', '/about_me/papers'],
    ],
  },
  {
    title: "Portfolio",
    emoji: "💼",
    paths: [
      ['Awards', '/about_me/awards'],
      ["Github Projects", '/about_me/github'],
      ['Leetcode', '/about_me/leetcode'],
      ['Resume', '/about_me/resume']],
  },
  {
    title: "Classes",
    emoji: "📚",
    paths: [
      ['Graphics', '/classes/computer_graphics'],
      ['C++', '/classes/cpp'],
      ['Architecture', '/classes/architecture'],
      ['Database 1', '/classes/database'],
      ['Python', '/classes/py']],
  },
  {
    title: "etc.",
    emoji: "💻",
    paths: [
      ["Minecraft Map", "/etc/minecraft_map"],
      ["My Meme", "/etc/meme"]],
  },
] as Paths[];