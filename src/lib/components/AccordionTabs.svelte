<script lang="ts">
  import { AccordionItem, Accordion, Tabs, TabItem } from "flowbite-svelte";
  import FullScreenIframe from '$lib/components/FullScreenIframe.svelte'
  import MainContent from "$lib/components/MainContent.svelte";
  import type Accordiontype from '$lib/stores/accordion_tabs_types'
  import CodeBlock from '$lib/components/CodeBlock.svelte';
  
  interface Props { data: Accordiontype; }
  let { data }: Props = $props();
  
  function getextention(str: string){
    let exten = str.split(".").pop()
    switch (exten) {
      case 'h':
        return "cpp"
      case 's':
        return "asm"
      default:
        return exten
    }
  }
</script>

<MainContent>
    <Accordion>
    {#each data as accord (accord.header)}
        <AccordionItem>
            {#snippet header()}{accord.header}{/snippet}
            <Tabs tabStyle="underline">
                {#each accord.tab_list as tab (tab.tab_name)}
                    <TabItem title={tab.tab_name}>
                        {#if tab.isCode}
                            {#await fetch(tab.resource).then(res => res.text())}
                                <p>Loading code...</p>
                            {:then codeText}
                                <CodeBlock code={codeText} lang={getextention(tab.resource)} />
                            {:catch error}
                                <p>Error loading file: {error.message}</p>
                            {/await}
                        {:else}
                            <FullScreenIframe url={tab.resource} />
                        {/if}
                    </TabItem>
                {/each}
            </Tabs>
        </AccordionItem>
    {/each}
    </Accordion>
</MainContent>