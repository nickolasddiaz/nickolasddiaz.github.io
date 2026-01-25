<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(() => {
    goto('/about_me', { replaceState: true });
  });
</script>

<p>Loading...</p>