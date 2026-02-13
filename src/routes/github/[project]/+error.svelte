<script lang="ts">
	import MainContent from '$lib/components/MainContent.svelte';
	import { resolve } from '$app/stores';

</script>

<MainContent>
	<h1>Oops! Something went wrong</h1>
	<p>Failed to load project'</p>
	<a href={resolve('/github/password_manager')}>Try another project</a>
</MainContent>
