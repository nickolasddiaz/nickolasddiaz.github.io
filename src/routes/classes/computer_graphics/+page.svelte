<script lang="ts">
  import { data } from "$lib/stores/computer_graphics";
  import AccordionTabs from '$lib/components/AccordionTabs.svelte'
  import MainContent from '$lib/components/MainContent.svelte'


</script>

<MainContent>
    <p>Here are my projects from my class, computer graphics at Florida Poly Spring 2026</p>
    <AccordionTabs {data}></AccordionTabs>
</MainContent>