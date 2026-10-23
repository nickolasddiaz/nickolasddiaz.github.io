<script lang="ts">
  import data from "#lib/stores/classes/system_analysis.js";
  import AccordionTabs from "#lib/components/AccordionTabs.svelte";
  import MainContent from "#lib/components/MainContent.svelte";
</script>

<MainContent>
  <br />
  <h2>System Analysis</h2>
  <hr />
  <br />
  <p>
    Here is all of my reports from System Analysis at Florida Polytechnic
    University Spring 2025
  </p>
  <br />
  <AccordionTabs {data}></AccordionTabs>
  <br />
  <br />
</MainContent>
