<script lang="ts">
  import { sidenavOpen } from '$lib/stores/navigation';
  import { goto } from '$app/navigation';

  const menuItems = [
    { name: 'About Me', path: '/about_me' },
    { name: 'Career Summary', path: '/career_summary' },
    { name: 'Academic Papers', path: '/papers' },
    { name: 'Awards', path: '/awards' },
    { name: 'Password Manager', path: '/password_manager' },
    { name: 'Text Editor', path: '/text_editor' },
    { name: 'Tank Game', path: '/tank_game' },
    { name: 'Pantry Manager', path: '/pantry_manager' },
    { name: 'Client Server', path: '/client_server' },
    { name: 'Programming Language', path: '/programming_language' },
    { name: 'Resume', path: '/resume' }
  ];

  function navigate(path: string) {
    goto(path);
    sidenavOpen.set(false);
  }

  function closeNav() {
    sidenavOpen.set(false);
  }
</script>

<div class="sidenav" class:open={$sidenavOpen}>
  <button class="closebtn" on:click={closeNav}>&times;</button>
  {#each menuItems as item}
    <a href={item.path} on:click|preventDefault={() => navigate(item.path)}>
      {item.name}
    </a>
  {/each}
</div>

<style>
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: var(--green);
    overflow-x: hidden;
    transition: cubic-bezier(.01, 1.93, 1, -0.6);
    padding-top: 60px;
  }

  .sidenav.open {
    width: 250px;
  }

  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: var(--white);
    display: block;
    transition: 0.3s;
    cursor: pointer;
  }

  .sidenav a:hover {
    color: var(--grey);
  }

  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    background: none;
    border: none;
    color: var(--white);
    cursor: pointer;
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
</style>