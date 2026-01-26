
<script lang="ts">
  import { page } from '$app/stores';
  import { getPapers } from '$lib/data/papers';
  import PaperCard from '$lib/components/PaperCard.svelte';
  import { marked } from 'marked';
  import { resolve } from '$app/paths';



  let content = $state('');
  let loading = $state(true);

  const papers = getPapers();
  
  $effect(() => {
    const pageName = $page.params.page;
    if (typeof pageName === 'string') {
      loadPageContent(pageName);
    }
  });

  async function loadPageContent(pageName: string) {
		if (pageName === ""){
			pageName = "about_me";
		}

    loading = true;
    
    if (pageName === 'papers') {
      loading = false;
      return;
    }

    const projectMap: Record<string, string> = {
      'password_manager': 'NickolasDanielPassManager',
      'text_editor': 'NickolasDiaz-Text-Editor',
      'tank_game': 'Tank_Game',
      'pantry_manager': 'CEN-4033-Pantry-Inventory-Management-System',
      'client_server': 'CNT-3004-client-server-project',
      'programming_language': '16bitcomputer'
    };

    const repoName = projectMap[pageName];
    
    if (repoName) {
      await fetchAndRenderMarkdown(repoName);
    } else {
      content = await fetchHTMLContent(pageName);
    }
    
    loading = false;
  }

  async function fetchAndRenderMarkdown(repoName: string) {
    const url = `https://api.github.com/repos/nickolasddiaz/${repoName}/contents/README.md`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.content) {
        const markdown = atob(data.content.replace(/\n/g, ''));
        content = marked.parse(markdown) as string;
      } else {
        content = '<p>Failed to load content.</p>';
      }
    } catch (error) {
      console.error('Error fetching markdown:', error);
      content = '<p>Error loading content.</p>';
    }
  }

  async function fetchHTMLContent(pageName: string) {
    try {
      const fileName = (pageName.replace(/-/g, ' '));
      const response = await fetch(resolve(`/${fileName}`));
      return await response.text();
    } catch (error) {
      console.error('Error fetching HTML:', error);
      return '<p>Error loading content.</p>';
    }
  }
</script>

{#if $page.params.page === 'papers'}
  <div class="write" style="width: 80%; margin: 10px auto; padding-top: 7vh;">
    <div style="text-align: center; margin-bottom: 20px;">
      The following collection comprises all of my academic papers, ranging from my 9th-grade
      assignments to my college-level coursework. The total number of essays displayed are {papers.length}.
    </div>
    <div class="card-container">
      {#each papers as paper}
        <PaperCard {paper} />
      {/each}
    </div>
  </div>
{:else if loading}
  <div class="write">
    <p>Loading...</p>
  </div>
{:else}
  <div class="write display">
    {@html content}
  </div>
{/if}