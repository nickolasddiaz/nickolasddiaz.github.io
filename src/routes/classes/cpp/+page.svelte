<script lang="ts">
  import { data } from "$lib/stores/cpp";
  import AccordionTabs from '$lib/components/AccordionTabs.svelte'

  
  import MainContent from '$lib/components/MainContent.svelte'
  import { resolve } from '$app/paths';


</script>

<MainContent>
    <p>Here are all my C++ homework, projects and labs from my C++ in Fullerton College from spring 2023. <a class="link-primary" href={resolve("/cpp/C++.zip")}>Here</a> is a zip link with one single makefile to compile all 145 executatables.</p>
    <AccordionTabs {data}></AccordionTabs>
</MainContent>