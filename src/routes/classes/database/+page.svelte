<script lang="ts">
  import data from "#lib/stores/classes/database.js";
  import AccordionTabs from "#lib/components/AccordionTabs.svelte";
  import MainContent from "#lib/components/MainContent.svelte";
</script>

<MainContent>
  <br />
  <h2>Artificial Intelligence</h2>
  <hr />
  <br />
  <p>
    Here is my final project from my class, Database 1 at Florida Poly Spring
    2025
  </p>
  <br />
  <AccordionTabs {data}></AccordionTabs>
  <br />
  <br />
</MainContent>
