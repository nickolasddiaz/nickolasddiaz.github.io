<script lang="ts">
  import { codeToHtml } from "shiki";
  let { code, lang = "javascript", themes = {} } = $props();
  let light = $derived(themes.light ?? "min-light");
  let dark = $derived(themes.dark ?? "github-dark");

  let htmlPromise = $derived(
    codeToHtml(code, { lang, themes: { light, dark } }),
  );
</script>

{#await htmlPromise}
  <p>Highlighting...</p>
{:then html}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html html}
{:catch error}
  <p>Error: {error.message}</p>
{/await}
