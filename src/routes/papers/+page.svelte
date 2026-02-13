<script lang="ts">
    import MainContent from "$lib/components/MainContent.svelte";
    import { resolve } from '$app/paths';
    import paperRaw from '$lib/data/papers_data.csv?raw'; 
    import { year_day_formatDate } from "$lib/utils/formatDate";
    import { Document } from 'flexsearch';
    
    import { Datepicker, Card, Search, Modal } from "flowbite-svelte";

    let defaultModal = $state(false);
    
    let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
        from: undefined,
        to: undefined
      });
    
    interface Paper {
      title: string;
      url: string;
      date: Date;
      topic: string;
      page_count: number;
      word_count: number;
    }
    
    let papers: Paper[] = [];

    let searchQuery = $state('');
    
    let total_pages: number = $state(0);
    let total_words: number = $state(0);
    
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

    let results = $derived.by(() => {
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
            
            return searchResults.filter(paper => {
                if (dateRange.from) {
                    const after = dateRange.from;
                    if (paper.date <= after) { 
                        return false;
                    }
                }
    
                if (dateRange.to) {
                    const before = dateRange.to;
                    if (paper.date >= before) {
                        return false;
                    }
                }
                
                return true;
            });
        });
    
    let selectedPdfUrl = $state('');
    
    function openPdfDialog(url: string) {
        selectedPdfUrl = url;
        defaultModal = true
    }
    
</script>

<MainContent>
    <h3>The following collection comprises all of my academic papers, ranging from my 9th-grade assignments to my college-level coursework. The total number of essays displayed are {papers.length}, total pages: {total_pages}, total words: {total_words}.</h3>
    <div class="gap-4 items-center">
        <Search clearable bind:value={searchQuery} class="w-3/4"/>
        <Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="blue" class="w-1/4"/>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {#each results as item (item.title)} 
            <Card img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAw8GwOcAAAAASUVORK5CYII=" horizontal size="md">
                <button onclick={() => openPdfDialog(item.url)}>
                    <div class="p-4 selection:bg-fuchsia-300 selection:text-fuchsia-900"> 
                        <div>{@html highlightText(item.title, searchQuery)}</div>
                        <div>{year_day_formatDate(item.date)}</div>
                        <div>Words: {item.word_count}</div>
                        <div>Pages: {item.page_count}</div>
                    </div>
                </button>
            </Card>
        {:else}
            <p>No papers found matching your criteria.</p>
        {/each}
    </div>
</MainContent>

<Modal title={decodeURIComponent(selectedPdfUrl.split('/').at(-1)!)} bind:open={defaultModal} class="h-[90vh]" bodyClass="p-0 flex-1 overflow-hidden">
  {#if selectedPdfUrl}
    <div class="w-full h-full flex flex-col">
      <iframe title="paper" src={selectedPdfUrl} class="flex-1 w-full border-0"></iframe>
    </div>
  {/if}
</Modal>
