import { marked } from 'marked';

export default async function renderMarkdown(repoName: string): Promise<string> {
  const url = `https://api.github.com/repos/nickolasddiaz/${repoName}/contents/README.md`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.content) {
      const base64 = data.content.replace(/\n/g, '');
      const markdown = decodeURIComponent(escape(atob(base64)));
      
      return marked.parse(markdown) as string;
    } else {
      return 'Failed to load content';
    }
  } catch (error) {
    console.error('Error fetching markdown:', error);
    return 'Error loading content';
  }
}

// const projectMap: Record<string, string> = {
//   'password_manager': 'NickolasDanielPassManager',
//   'text_editor': 'NickolasDiaz-Text-Editor',
//   'tank_game': 'Tank_Game',
//   'pantry_manager': 'CEN-4033-Pantry-Inventory-Management-System',
//   'client_server': 'CNT-3004-client-server-project',
//   'programming_language': '16bitcomputer'
// };