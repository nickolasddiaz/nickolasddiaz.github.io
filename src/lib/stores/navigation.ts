type Name = string;
type Path = string;

type PathEntry = [Name, Path]; 

type NavList = Record<string, PathEntry[]>;

  
export const navlist: NavList = {
  "About Me": [['Career Summary', '/about_me/career_summary'],
              ['Academic Papers', '/about_me/papers'],
              ['Awards', '/about_me/awards'],
              ['Resume', '/about_me/resume'],
              ['Leetcode', '/about_me/leetcode'],
              ["Github Projects", '/about_me/github']],
  
  "Classes": [['Computer Graphics', '/classes/computer_graphics'],
              ['C++', '/classes/cpp'],
              ['Computer Architecture', '/classes/architecture'],
              ['Database 1', '/classes/database'],
              ['Python', '/classes/py']],
  
  "etc.": [["Minecraft Map", "/etc/minecraft_map"],
          ["My Meme", "/etc/meme"]],
}