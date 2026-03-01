<script lang="ts">
    import data from "$lib/stores/social_media";

</script>


<div class="flex justify-around p-5">
    {#each Object.entries(data) as [index, value]}
        <a href={value.link} title={value.title} class="p-3 rounded-lg shadow-md hover:shadow-sm hover:shadow-fuchsia-500 transition-shadow group">
            <img src={value.img} alt={value.title} class="w-10 h-10 mx-auto">
            <span class="group-hover:text-fuchsia-500">{value.title}</span>
        </a>
    {/each}
</div>
