<script lang="ts">
  import type { PageData } from './$types';
  import MainContent from "$lib/components/MainContent.svelte";
  import { navigating } from '$app/state';

  let { data }: { data: PageData } = $props();

</script>

{#if navigating}
  <MainContent>
    <div class="leading-[1.6]">
      {@html data.html}
    </div>
  </MainContent>
{:else}
    <MainContent>
      <div class="text-center gap-8 ">Loading project...</div>
    </MainContent>
{/if}