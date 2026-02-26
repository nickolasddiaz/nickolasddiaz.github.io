type Name = string;
type Path = string;

type PathEntry = [Name, Path]; 

type NavList = Record<string, PathEntry[]>;

  
export const navlist: NavList = {
  "About Me": [['Career Summary', '/about_me/career_summary'],
              ['Academic Papers', '/about_me/papers'],
              ['Awards', '/about_me/awards'],
              ['Resume', '/about_me/resume'],
              ['Leetcode', '/about_me/leetcode']],
  
  "Classes": [['Computer Graphics', '/classes/computer_graphics'],
              ['C++', '/classes/cpp'],
              ['Computer Architecture', '/classes/architecture'],
              ['Database 1', '/classes/database'],
              ['Python', '/classes/py']],
  
  "Github Projects": [['Password Manager', '/github/NickolasDanielPassManager'],
              ['Text Editor', '/github/NickolasDiaz-Text-Editor'],
              ['Tank Game', '/github/Tank_Game'],
              ['Pantry Manager', '/github/CEN-4033-Pantry-Inventory-Management-System'],
              ['Client Server', '/github/CNT-3004-client-server-project'],
              ['Programming Language', '/github/16bitcomputer']], 
}