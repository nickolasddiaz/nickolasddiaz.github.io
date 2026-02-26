<script lang="ts">
  import { data } from "$lib/stores/database";
  import AccordionTabs from '$lib/components/AccordionTabs.svelte'
  import MainContent from '$lib/components/MainContent.svelte'


</script>

<MainContent>
    <p>Here is my final project from my class, Database 1 at Florida Poly Spring 2025</p>
    <AccordionTabs {data}></AccordionTabs>
</MainContent>