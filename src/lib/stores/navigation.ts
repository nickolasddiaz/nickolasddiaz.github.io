type Name = string;
type Path = string;

type PathEntry = [Name, Path]; 

type NavList = Record<string, PathEntry[]>;

  
export const navlist: NavList = {
  "About Me": [['Career Summary', '/about_me/career_summary'],
              ['Academic Papers', '/about_me/papers'],
              ['Awards', '/about_me/awards'],
              ['Resume', '/about_me/resume']],
  
  "Github Projects": [['Password Manager', '/github/NickolasDanielPassManager'],
              ['Text Editor', '/github/NickolasDiaz-Text-Editor'],
              ['Tank Game', '/github/Tank_Game'],
              ['Pantry Manager', '/github/CEN-4033-Pantry-Inventory-Management-System'],
              ['Client Server', '/github/CNT-3004-client-server-project'],
              ['Programming Language', '/github/16bitcomputer']], 
}