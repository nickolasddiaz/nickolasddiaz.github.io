<!-- EmojiIcon.svelte -->
<script lang="ts">
  interface Props {
    bgColor?: string;
    emoji?: string;
    sizeClass?: string;
  }

  let { 
    bgColor = 'lightblue', 
    emoji = '🤩', 
    sizeClass = 'w-12 h-12' 
  }: Props = $props();
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