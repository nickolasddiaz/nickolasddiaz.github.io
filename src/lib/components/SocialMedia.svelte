<script lang="ts">
  import data from "#lib/stores/social_media.js";
  import { resolve } from "$app/paths";
</script>

<div class="flex justify-around p-5">
  {#each Object.entries(data) as [key, value] (key)}
    <a
      href={value.link}
      title={value.title}
      class="group rounded-lg p-3 shadow-md transition-shadow hover:shadow-sm hover:shadow-fuchsia-500"
    >
      <img src={value.img} alt={value.title} class="mx-auto h-10 w-10" />
      <span class="group-hover:text-fuchsia-500">{value.title}</span>
    </a>
  {/each}
</div>
