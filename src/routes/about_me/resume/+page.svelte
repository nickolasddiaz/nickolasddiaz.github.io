<script>
  import MainContent from "$lib/components/MainContent.svelte";
  import FullScreenIframe from "$lib/components/FullScreenIframe.svelte";
  import { resolve } from '$app/paths';
  const url = resolve("/resume/resume.pdf");  
</script>


<MainContent>
    <FullScreenIframe {url}></FullScreenIframe>
</MainContent>
