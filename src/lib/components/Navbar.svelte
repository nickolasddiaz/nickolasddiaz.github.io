<script lang="ts">
  import { sidenavOpen } from '$lib/stores/navigation';
  import { page } from '$app/stores';

  $: currentPage = $page.url.pathname.split('/').pop() || 'About Me';
  $: displayTitle = currentPage
    .replace(/_/g, ' ')
    .replace(/(^\w|\s\w)/g, m => m.toUpperCase());

  function toggleNav() {
    sidenavOpen.update(n => !n);
  }
</script>

<nav class="navbar" class:shifted={$sidenavOpen}>
  <button class="openbtn" on:click={toggleNav}>
    &#9776; {displayTitle}
  </button>
</nav>

<style>
  .navbar {
    width: 100%;
    background-color: var(--green);
    overflow: hidden;
    position: fixed;
    height: 7vh;
    left: 0;
    top: 0;
    transition: left .2s cubic-bezier(0.42, 0, 0.58, 1);
    z-index: 10;
    display: flex;
    align-items: center;
  }

  .navbar.shifted {
    left: 250px;
  }

  .openbtn {
    background: none;
    border: none;
    padding: 12px;
    color: var(--white);
    font-size: 23px;
    cursor: pointer;
    height: 100%;
    transition: background-color 0.3s;
  }

  .openbtn:hover {
    background-color: var(--black);
  }

  @media screen and (max-width: 500px) {
    .navbar.shifted {
      left: 0;
    }
  }
</style>