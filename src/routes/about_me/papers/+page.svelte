<script lang="ts">
    import MainContent from "$lib/components/MainContent.svelte";
    import {topic_types, papers, total_pages, total_words, type Paper, FILTYPE, sortPapers} from '$lib/stores/paper_types'
    import { year_day_formatDate } from "$lib/utils/formatDate";
    import { Document } from 'flexsearch';
    import { Button, Dropdown, Radio } from "flowbite-svelte";
    import { Datepicker, Search, Modal } from "flowbite-svelte";
    import { FilterOutline } from "flowbite-svelte-icons";
	import EmojiIcon from "$lib/components/EmojiIcon.svelte";

    let defaultModal = $state(false);
    
    let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
        from: undefined,
        to: undefined
      });


    let searchQuery = $state('');
    let filter = $state(FILTYPE.Newest);
    
    
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
        return text.replace(regex, '<mark class="highlight bg-fuchsia-300">$1</mark>');
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

            searchResults = sortPapers(searchResults, filter);
            
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
    <div class="flex flex-wrap gap-4 items-center justify-between">
        <Search bind:value={searchQuery} class="w-full md:flex-1"/>
        <Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="blue" class="w-auto"/>

        <Button>Filter<FilterOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
        <Dropdown simple class="*:p-2">
            <li> <Radio name="filter" bind:group={filter} value={FILTYPE.Alph}>Alphbetical</Radio> </li>
            <li> <Radio name="filter" bind:group={filter} value={FILTYPE.Rev}>Reverse</Radio> </li>
            <li> <Radio name="filter" bind:group={filter} value={FILTYPE.Page}>Page Count</Radio> </li>
            <li> <Radio name="filter" bind:group={filter} value={FILTYPE.Word}>Word Count</Radio> </li>
            <li> <Radio name="filter" bind:group={filter} value={FILTYPE.Oldest}>Oldest</Radio> </li>
            <li> <Radio name="filter" bind:group={filter} value={FILTYPE.Newest}>Newest</Radio> </li>
        </Dropdown>
    </div>
    
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 p-2">
  {#each results as item (item.title)}
    <button
      class="flex items-center gap-2 md:gap-3 p-2 text-left bg-white rounded-xl shadow-md group"
      onclick={() => openPdfDialog(item.url)}
    >
      <div class="shrink-0">
        <EmojiIcon
          sizeClass="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
          bgColor={topic_types[item.topic]?.background_color ?? ''}
          emoji={topic_types[item.topic]?.emoji ?? ''}
        />
      </div>
      <div class="min-w-0 text-xs md:text-sm lg:text-base group-hover:text-fuchsia-500">
        <div class="font-medium trunca">
          {@html highlightText(item.title, searchQuery)}
        </div>
        <div class="text-gray-500">{year_day_formatDate(item.date)}</div>
        <div class="text-gray-400 hidden md:block">Words: {item.word_count}</div>
        <div class="text-gray-400 hidden md:block">Pages: {item.page_count}</div>
      </div>
    </button>
  {:else}
    <p>No papers found matching your criteria.</p>
  {/each}
</div>
</MainContent>

<Modal title={decodeURIComponent(selectedPdfUrl.split('/').at(-1)!)} bind:open={defaultModal} class="h-[90vh]" classes={{ body: "p-0 flex-1 overflow-hidden" }}>
  {#if selectedPdfUrl}
    <div class="w-full h-full flex flex-col">
      <iframe title="paper" src={selectedPdfUrl + "#zoom=FitW"} class="flex-1 w-full border-0"></iframe>
    </div>
  {/if}
</Modal>