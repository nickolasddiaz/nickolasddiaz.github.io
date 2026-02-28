<script lang="ts">
    import data from '$lib/data/leetcode.json';
    import MainContent from "$lib/components/MainContent.svelte";
    import { Tabs, TabItem, Dropdown, Modal, Search, Radio, Button } from "flowbite-svelte";
    import { LaptopCodeOutline, NewspaperOutline, FilterOutline } from 'flowbite-svelte-icons';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import { Document } from 'flexsearch'

	const DIFFICULTY = {
        All: 0,
        Easy: 1,
        Medium: 2,
        Hard: 3,
    } as const;
    
    const difficultyColors = {
        Hard: 'text-red-400',
        Medium: 'text-orange-300',
        Easy: 'text-green-400'
      };
    
    let identifier: string = $state('1');
    let defaultModal: boolean = $state(false);
    
    function openDialog(id: string) {
        identifier = id;
        defaultModal = true;
    }
    let searchQuery = $state('');
    let Difficulty_filter = $state(DIFFICULTY.All);
  
    
    type Problem = {
      id: string;
      title: string;
      difficulty: string;
    };
    
    const index = new Document<Problem>({
      document: {
        id: 'id',
        index: ['id', 'title'],
        store: true,
      },
      tokenize: 'forward',
    });
    
    Object.entries(data).forEach(([key, value]) => {
      index.add({ id: key, title: value.title, difficulty: value.difficulty });
    });
    
    const filteredEntries = $derived(() => {
      const entries = Object.entries(data) as [string, typeof data[string]][];
    
      const diffFiltered = Difficulty_filter === DIFFICULTY.All
        ? entries
        : entries.filter(([, v]) => v.difficulty === Object.keys(DIFFICULTY)[Difficulty_filter]);
    
      if (!searchQuery.trim()) return diffFiltered;
    
      const results = index.search(searchQuery, { index: ['id', 'title'], enrich: true });
      const matchedIds = new Set(results.flatMap(r => r.result.map(item => String(item.id))));
    
      return diffFiltered.filter(([key]) => matchedIds.has(key));
    });
    
</script>

<MainContent>
    <p>Here serves all of my {Object.keys(data).length} Leetcode Submissions. <a class="link-primary" title="Leetcode" href="https://leetcode.com/u/nickolasddiaz/">Leetcode Link</a></p>

    <div class="flex flex-wrap gap-4 items-center justify-between">
        <Search bind:value={searchQuery} class="w-full md:flex-1"/>
        
        <Button>Filter<FilterOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
        <Dropdown simple class="*:p-2">
            <li> <Radio name="filter" bind:group={Difficulty_filter} value={DIFFICULTY.All}>All</Radio> </li>
            <li> <Radio name="filter" bind:group={Difficulty_filter} value={DIFFICULTY.Easy}>Easy</Radio> </li>
            <li> <Radio name="filter" bind:group={Difficulty_filter} value={DIFFICULTY.Medium}>Medium</Radio> </li>
            <li> <Radio name="filter" bind:group={Difficulty_filter} value={DIFFICULTY.Hard}>Hard</Radio> </li>
        </Dropdown>
        
        
    </div>
    <ul class="space-y-4 p-4 mx-auto bg-gray-100 shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 list-disc">
    {#each filteredEntries() as [key, value] (key)}
        <button onclick={() => openDialog(key)}>
            <li class="flex items-center p-3 md:odd:bg-transparent md:nth-[4n+1]:bg-slate-50 md:nth-[4n+2]:bg-slate-50 odd:bg-slate-50 justify-between w-full group">
                <span class="font-medium trunca text-gray-500 group-hover:text-fuchsia-500">{key} </span> 
                <span class="font-medium trunca text-gray-500 group-hover:text-fuchsia-500">{value.title} </span> 
                <span class="font-bold {difficultyColors[value.difficulty]}">
                    {value.difficulty} 
                </span>
            </li>
        </button>
    {/each}
    </ul>

</MainContent>


<Modal title={`${identifier} - ${data[identifier]["title"]} - ${data[identifier]["difficulty"]}`} bind:open={defaultModal} class="h-[90vh]" classes={{ body: "p-0 flex-1 truncate" }}>
  {#if defaultModal}
    <div class="w-full h-full flex flex-col">
        <Tabs tabStyle="underline">
          <TabItem open>
            {#snippet titleSlot()}
              <div class="flex items-center gap-2">
                <NewspaperOutline size="md" />
                Description
              </div>
            {/snippet}
            <p class="text-gray-500 dark:text-gray-400">
                {@html data[identifier]["html_content"]}
            </p>
          </TabItem>
          {#each data[identifier]["submissions"] as item (item["code_content"])}
              <TabItem>
                  {#snippet titleSlot()}
                    <div class="flex items-center gap-2">
                      <LaptopCodeOutline size="md" />
                      <span>{item["language"]}</span>
                    </div>
                  {/snippet}

                  <div class="flex gap-4 text-sm text-gray-500 dark:text-gray-400 px-4 pt-3 pb-2">
                    <span>{new Date(item["time"] * 1000).toLocaleString()}</span>
                    <span>{(item["runtime"] === -1) ? "" : item["runtime"] + 's'}</span>
                    <span>{(item["memory"] === -1) ? "" : item["memory"] + 'MB'}</span>
                    <span class={item["accepted"] ? "text-green-500" : "text-red-500"}>
                      {item["accepted"] ? "✔ Accepted" : "✘ Rejected"}
                    </span>
                  </div>

                  <div class="h-full">
                      <CodeBlock code={item["code_content"]} lang={item["language"]}></CodeBlock>
                  </div>
              </TabItem>
          {/each}
        </Tabs>
    </div>
  {/if}
</Modal>