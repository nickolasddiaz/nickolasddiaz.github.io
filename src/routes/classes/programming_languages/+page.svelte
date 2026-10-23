<script lang="ts">
  import data from "#lib/stores/classes/programming_languages.js";
  import AccordionTabs from "#lib/components/AccordionTabs.svelte";
  import MainContent from "#lib/components/MainContent.svelte";
</script>

<MainContent>
  <br />
  <h2>Artificial Intelligence</h2>
  <hr />
  <br />
  <p>
    Here is all of my projects from my Programming Languages class at Florida
    Polytechnic University Spring 2026
  </p>
  <br />
  <AccordionTabs {data}></AccordionTabs>
  <br />
  <br />
</MainContent>
