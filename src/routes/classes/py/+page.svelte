<script lang="ts">
  import data from "$lib/stores/py";
  import AccordionTabs from '$lib/components/AccordionTabs.svelte'
  import MainContent from '$lib/components/MainContent.svelte'


</script>

<MainContent>
    <p class="paragraph-text">Here is all of my homework, labs, and exams from python at Cypress College Spring 2023</p>
    <AccordionTabs {data}></AccordionTabs>
</MainContent>