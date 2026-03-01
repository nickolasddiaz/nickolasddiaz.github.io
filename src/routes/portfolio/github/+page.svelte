<script lang="ts">
  import data from "$lib/stores/github";
  import AccordionTabs from '$lib/components/AccordionTabs.svelte'
  import MainContent from '$lib/components/MainContent.svelte'


</script>

<MainContent>
    <AccordionTabs {data}></AccordionTabs>
</MainContent>