<script lang="ts">
  import { codeToHtml } from "shiki";
  let { code, lang = "javascript", theme = "min-light" } = $props();

  let htmlPromise = $derived(codeToHtml(code, { lang, theme }));
</script>

{#await htmlPromise}
  <p>Highlighting...</p>
{:then html}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html html}
{:catch error}
  <p>Error: {error.message}</p>
{/await}
