<script lang="ts">
  import data from "$lib/stores/architecture";
  import AccordionTabs from '$lib/components/AccordionTabs.svelte'
  import MainContent from '$lib/components/MainContent.svelte'


</script>

<MainContent>
    <p class="paragraph-text">Here are all of my labs from Computer Architecture at Cypress College Spring 2023</p>
    <AccordionTabs {data}></AccordionTabs>
</MainContent>