<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
	import '../app.css';
</script>

<Navbar/>
{@render children()}