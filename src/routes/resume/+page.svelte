<script>
  import MainContent from "$lib/components/MainContent.svelte";
  import { resolve } from '$app/paths';
  const resume_location = resolve("/resume/resume.pdf");  
</script>


<MainContent>
    <iframe class="w-full h-full" title="My Resume" src={resume_location}></iframe>
</MainContent>
