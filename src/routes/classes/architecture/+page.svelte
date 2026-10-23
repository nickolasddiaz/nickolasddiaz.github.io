<script lang="ts">
  import data from "#lib/stores/classes/architecture.js";
  import AccordionTabs from "#lib/components/AccordionTabs.svelte";
  import MainContent from "#lib/components/MainContent.svelte";
</script>

<MainContent>
  <br />
  <h2>Computer Architecture</h2>
  <hr />
  <br />
  <p>
    Here are all of my labs from Computer Architecture at Cypress College Spring
    2023
  </p>
  <br />
  <AccordionTabs {data}></AccordionTabs>
  <br />
  <br />
</MainContent>
