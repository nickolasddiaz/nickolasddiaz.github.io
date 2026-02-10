<script lang="ts">
    import MainContent from "$lib/components/MainContent.svelte";
    import { resolve } from '$app/paths';
    import paperRaw from '$lib/data/papers_data.csv?raw'; 
    import formatDate from "$lib/utils/formatDate";
    import { Document } from 'flexsearch';
    
    interface Paper {
      title: string;
      url: string;
      date: Date;
      topic: string;
      page_count: number;
      word_count: number;
    }
    
    let papers: Paper[] = [];
    let results: Paper[] = [];

    let searchQuery = '';
    let beforeDate: string = "";
    let afterDate: string = "";
    let selectedWords: number = 0;
    let selectedPages: number = 0;
    
    let total_pages: number = 0;
    let total_words: number = 0
    
  
    
    for (const line of paperRaw.split(/\r?\n/)) {        
        let values = line.split(','); 
        
        let title = values[0];
        let url = resolve(`/papers/${encodeURIComponent(title)}.pdf`);
        title = title.replace('_',"'");
        let date = new Date(values[1]);
        let topic = values[2];
        let page_count = Number(values[3]);
        let word_count = Number(values[4]);
        total_pages += page_count;
        total_words += word_count;
        
        const newPaper: Paper = {title, url, date, topic, page_count, word_count};
        papers.push(newPaper);
    }
    
    const index = new Document<Paper>({
        document: {
          id: "url",
          index: ["title", "topic"],
          store: true
        },
        tokenize: "forward"
    });
    
    papers.forEach(p => index.add(p));
    
    
    function highlightText(text: string, query: string): string {
        if (!query.trim()) {
            return text;
        }

        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        return text.replace(regex, '<mark class="highlight">$1</mark>');
    }

    $: {
        let searchResults: Paper[];
        if (searchQuery.trim() === '') {
            searchResults = papers;
        } else {
            const searchOutput = index.search(searchQuery, { enrich: true });
            const rawResults = searchOutput.flatMap(fieldResult => 
                fieldResult.result.map(res => res.doc)
            );
            const validPapers = rawResults.filter((doc): doc is Paper => doc != null);
            searchResults = [...new Set(validPapers)];
        }
        
        results = searchResults.filter(paper => {
            if (selectedPages > 0 && paper.page_count < selectedPages) {
                return false;
            }

            if (selectedWords > 0 && paper.word_count < selectedWords) {
                return false;
            }

            if (afterDate) {
                const after = new Date(afterDate);
                if (paper.date <= after) { 
                    return false;
                }
            }

            if (beforeDate) {
                const before = new Date(beforeDate);
                if (paper.date >= before) {
                    return false;
                }
            }
            
            return true;
        });
    }
    
    let selectedPdfUrl = '';
    let dialog: HTMLDialogElement;
    
    function openPdfDialog(url: string) {
        selectedPdfUrl = url;
        dialog?.showModal();
    }
    
    function closePdfDialog() {
        dialog?.close();
        selectedPdfUrl = '';
    }
</script>

<MainContent>
    <h3>The following collection comprises all of my academic papers, ranging from my 9th-grade assignments to my college-level coursework. The total number of essays displayed are {papers.length}, total pages: {total_pages}, total words: {total_words}.</h3>
    <span class="filter-controls">
        <input  bind:value={searchQuery} placeholder="Search by title or topic..." class="search-input"/>
        <label for="date-before">Before</label><input id="date-before" type="date" bind:value={beforeDate}>
        <label for="date-after">After</label><input id="date-after" type="date" bind:value={afterDate}>
        <label for="page-slider">Min Pages: {selectedPages > 0 ? selectedPages : 'Any'}</label>
        <input type="range" id="page-slider" bind:value={selectedPages} min={0} max={27} step={1} />
        <label for="word-slider">Min Words: {selectedWords > 0 ? selectedWords : 'Any'}</label>
        <input type="range" id="word-slider" bind:value={selectedWords} min={0} max={3200} step={500} />
    </span>
    <div class="card-grid">
        {#each results as item (item.title)} 
            <button class="card" on:click={() => openPdfDialog(item.url)}>
                <div class="container"> 
                    <div>{@html highlightText(item.title, searchQuery)}</div>
                    <div>{formatDate(item.date)}</div>
                    <div>Words: {item.word_count}</div>
                    <div>Pages: {item.page_count}</div>
                </div>
            </button>
        {:else}
            <p>No papers found matching your criteria.</p>
        {/each}
    </div>
</MainContent>

<dialog bind:this={dialog} class="pdf-dialog">
   <div class="dialog-content">
        <button class="close-button" on:click={closePdfDialog}>✕ Close PDF</button>
        {#if selectedPdfUrl}
            <iframe title="paper" src={selectedPdfUrl} class="pdf-iframe"></iframe>
        {/if}
    </div>
</dialog>

<style>
    :global(mark.highlight) {
        background-color: yellow;
        color: black;
        border-radius: 3px;
        padding: 0 2px;
    }

    .filter-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
    }
    .search-input{
        width: 25%;
        min-width: 200px;
    }
    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        background: white;
        border: none;
        cursor: pointer;
        padding: 0;
        text-align: left;
        width: 100%;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .container { padding: 1rem; }
    .pdf-dialog {
        max-width: 90vw;
        max-height: 90vh;
        width: 1200px;
        padding: 0;
        border: none;
        border-radius: 8px;
        overflow: hidden;
    }
    .pdf-dialog::backdrop { background-color: rgba(0, 0, 0, 0.5); }
    .dialog-content { display: flex; flex-direction: column; height: 90vh; }
    .close-button {
        padding: 0.75rem; background-color: #f44336; color: white; border: none; cursor: pointer;
    }
    .pdf-iframe { flex: 1; border: none; width: 100%; }
</style>