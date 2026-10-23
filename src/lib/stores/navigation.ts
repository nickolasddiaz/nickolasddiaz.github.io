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
      ["AI", "/classes/ai"],
      ["Architecture", "/classes/architecture"],
      ["C++", "/classes/cpp"],
      ["Database 1", "/classes/database"],
      ["Graphics", "/classes/computer_graphics"],
      ["Python", "/classes/py"],
      ["System Analysis", "/classes/system_analysis"],
      ["Languages", "/classes/programming_languages"],
    ],
  },
  {
    title: "etc.",
    emoji: "⛳",
    paths: [["Fun Stuff", "/etc/fun_stuff"]],
  },
] as Paths[];
