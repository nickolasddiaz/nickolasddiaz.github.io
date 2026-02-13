import {
    marked
} from 'marked';

export default async function renderMarkdown(repoName: string): Promise < string > {
    const url = `https://api.github.com/repos/nickolasddiaz/${repoName}/contents/README.md`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.content) {
            throw new Error('No content found in GitHub response');
        }

        const markdown = atob(data.content.replace(/\n/g, ''));
        return marked.parse(markdown) as string;

    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error fetching markdown:', message);
        return `<div">Failed to load README: ${message}</div>`;
    }
}