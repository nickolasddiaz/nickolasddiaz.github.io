<script lang="ts">
	import { resolve } from '$app/paths';
	import MainContent from '$lib/components/MainContent.svelte';

</script>

<MainContent>
	<h1>Oops! Something went wrong</h1>
	<p>Failed to load project'</p>
	<a href={resolve('/github/password_manager')}>Try another project</a>
</MainContent>
