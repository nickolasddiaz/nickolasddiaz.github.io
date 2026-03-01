<script lang="ts">
    import NavPaths from '$lib/stores/navigation'
    import { slide, fade } from 'svelte/transition';
    
    let openIndex: string | null = null;
    
    function toggleMenu(index: string): void {
        openIndex = openIndex === index ? null : index;
    }

    function onWindowClick(e) {
        if (openIndex != null && !e.target.closest('li')) {
            openIndex = null;
        }
    }
</script>

<ul class="flex list-none space-x-4 place-content-center bg-primary-300 p-3 m-0">
    {#each Object.entries(NavPaths) as [index, data] (index)}
        <li class="inline-block p-2">
            <button type="button" class="cursor-pointer lg:text-2xl sm:text-xl bg-primary-310 hover:bg-primary-320 rounded-xl p-2" on:click={() => toggleMenu(index)}>
                <div class="navbar-text flex flex-col items-center sm:flex-row sm:gap-2">
                    <span>{data.emoji}</span>
                    <span>{data.title}</span>
                </div>
            </button>
            {#if openIndex === index}
                <ul class="z-50 mt-6 w-44 absolute bg-primary-300 lg:text-xl md:text-lg sm:text-base md:space-y-3 lg:space-y-1 whitespace-nowrap text-teal-900 rounded-s-md"
                in:slide={{ duration: 200, axis: 'y' } }
                out:fade={{ duration: 150 }}>
                    {#each data.paths as [name, href] (name)}
                        <li class="group p-2 hover:bg-primary-310 cursor-pointer rounded-s-md">
                            <a {href} on:click={() => openIndex = null} class="navbar-text block w-full h-full">{name}</a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </li>
    {/each}
</ul>

<svelte:window on:click={onWindowClick} />