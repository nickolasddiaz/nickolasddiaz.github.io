<script>
  import renderMarkdown from "$lib/utils/renderMarkdown";
  let { repoName } = $props();
  
  let html = $state("");

  $effect(() => {
    renderMarkdown(repoName).then(result => {
      html = result;
    });
  });
</script>

<div>
  {@html html}
</div>