<script lang="ts">
    import { onMount } from 'svelte';
    import run from '$lib/utils/pinball_game/script';
    import { initCharCache } from '$lib/utils/pinball_game/const';
    
    let canvasElement: HTMLCanvasElement;

    onMount(() => {
      
        initCharCache();
        run(canvasElement);
        
    });
</script>

<canvas 
    bind:this={canvasElement} 
    width="400" 
    height="400" 
    class="border border-black mx-auto"
></canvas>
