<script lang="ts">
  import data from "#lib/stores/classes/computer_graphics.js";
  import AccordionTabs from "#lib/components/AccordionTabs.svelte";
  import MainContent from "#lib/components/MainContent.svelte";
</script>

<MainContent>
  <br />
  <h2>Computer Graphics</h2>
  <hr />
  <br />
  <p>
    Here are my projects from my class, computer graphics at Florida Poly Spring
    2026
  </p>
  <br />
  <AccordionTabs {data}></AccordionTabs>
  <br />
  <br />
</MainContent>
