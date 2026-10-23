<script lang="ts">
  import NavPaths from "#lib/stores/navigation.js";
  import { slide, fade } from "svelte/transition";
  import { resolve } from "$app/paths";

  let openIndex: string | null = null;

  function toggleMenu(index: string): void {
    openIndex = openIndex === index ? null : index;
  }

  function onWindowClick(e: MouseEvent) {
    const target = e.target;
    if (
      openIndex != null &&
      (!(target instanceof Element) || !target.closest("li"))
    ) {
      openIndex = null;
    }
  }
</script>

<ul
  class="m-0 flex list-none items-center justify-center space-x-4 border-b-8 border-primary-600 bg-primary-300 p-8"
>
  {#each Object.entries(NavPaths) as [index, data] (index)}
    <li class="inline-block p-2">
      <button
        type="button"
        class="cursor-pointer rounded-xl bg-primary-310 p-2 hover:bg-primary-320 sm:text-xl lg:text-2xl"
        on:click={() => toggleMenu(index)}
      >
        <div
          class="navbar-text flex flex-col items-center sm:flex-row sm:gap-2"
        >
          <span>{data.emoji}</span>
          <span>{data.title}</span>
        </div>
      </button>
      {#if openIndex === index}
        <ul
          class="absolute z-50 mt-6 w-44 rounded-s-md bg-primary-300 whitespace-nowrap text-primary-900 sm:text-base md:space-y-3 md:text-lg lg:space-y-1 lg:text-xl"
          in:slide={{ duration: 200, axis: "y" }}
          out:fade={{ duration: 150 }}
        >
          {#each data.paths as [name, href] (name)}
            <a
              href={resolve(href as any)}
              on:click={() => (openIndex = null)}
              class="navbar-text block h-full w-full hover:bg-primary-310"
            >
              <li class="group cursor-pointer rounded-s-md p-2">
                <p>{name}</p>
              </li>
            </a>
          {/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>

<svelte:window on:click={onWindowClick} />
