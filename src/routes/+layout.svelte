<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Sidenav from '$lib/components/Sidenav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { sidenavOpen } from '$lib/stores/navigation';
  import '../app.css';

  let { children } = $props();
</script>

<Navbar />
<Sidenav />

<main id="main" class:shifted={$sidenavOpen}>
  {@render children()}
</main>

<Footer />

<button
  id="overlay"
  type="button"
  class:visible={$sidenavOpen}
  aria-label="Close sidenav overlay"
  aria-hidden={!$sidenavOpen}
  tabindex={$sidenavOpen ? 0 : -1}
  onclick={() => sidenavOpen.set(false)}
></button>
<div id="popup">
  <iframe id="popup-iframe" title="Document Viewer"></iframe>
</div>

<style>
  main {
    transition: margin-left 0.5s;
    margin-top: 7vh;
  }

  main.shifted {
    margin-left: 250px;
  }

  #overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
  }

  #overlay.visible {
    display: block;
  }

  #popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    z-index: 1000;
  }

  #popup-iframe {
    display: block;
    height: 100%;
    width: 100%;
    background-color: white;
  }
</style>