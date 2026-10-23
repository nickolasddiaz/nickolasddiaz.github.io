<script lang="ts">
  import data from "#lib/stores/classes/cpp.js";
  import AccordionTabs from "#lib/components/AccordionTabs.svelte";

  import MainContent from "#lib/components/MainContent.svelte";
  import { resolve } from "$app/paths";
</script>

<MainContent>
  <p class="paragraph-text">
    Here are all my C++ homework, projects and labs from my C++ in Fullerton
    College from spring 2023. <a
      class="link-primary"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      href={resolve("/cpp/C++.zip" as any)}>Here</a
    > is a zip link with one single makefile to compile all 145 executatables.
  </p>
  <AccordionTabs {data}></AccordionTabs>
</MainContent>
