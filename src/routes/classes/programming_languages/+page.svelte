<script lang="ts">
  import data from "$lib/stores/classes/programming_languages";
  import AccordionTabs from '$lib/components/AccordionTabs.svelte'
  import MainContent from '$lib/components/MainContent.svelte'


</script>

<MainContent>
    <p class="paragraph-text">Here is all of my projects from my Programming Languages class at Florida Polytechnic University Spring 2026</p>
    <AccordionTabs {data}></AccordionTabs>
</MainContent>