<!-- EmojiIcon.svelte -->
<script lang="ts">
  export let bgColor: string = 'lightblue';
  export let emoji: string = '🤩';
  export let sizeClass: string = 'w-12 h-12'; // controllable from outside
</script>

<svg class={sizeClass} viewBox="0 0 100 100" aria-label={emoji}>
  <rect width="100%" height="100%" rx="15" ry="15" fill={bgColor} />
  <text
    x="50%"
    y="55%"
    text-anchor="middle"
    dominant-baseline="middle"
    class="pointer-events-none"
    style="font-size: 60px;"
  >
    {emoji}
  </text>
</svg>