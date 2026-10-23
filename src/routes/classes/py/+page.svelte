<script lang="ts">
  import data from "#lib/stores/classes/py.js";
  import AccordionTabs from "#lib/components/AccordionTabs.svelte";
  import MainContent from "#lib/components/MainContent.svelte";
</script>

<MainContent>
  <br />
  <h2>Artificial Intelligence</h2>
  <hr />
  <br />
  <p>
    Here is all of my homework, labs, and exams from python at Cypress College
    Spring 2023
  </p>
  <br />
  <AccordionTabs {data}></AccordionTabs>
  <br />
  <br />
</MainContent>
