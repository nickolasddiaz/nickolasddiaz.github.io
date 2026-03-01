<script lang="ts">
    import { DeviceMockup } from "flowbite-svelte";
    import MainContent from '$lib/components/MainContent.svelte'
    import Youtube from "svelte-youtube-embed";
    import map_pic  from "$lib/assets/minecraft_map.jpg";
</script>

<MainContent>
    <div class="paragraph-text">
        <p class="text-lg">Here is my Minecraft Bedrock Map created on 13 May, 2020. It has over 187 thousand downloads on the mobile app "Addons for Minecraft!!!"</p>
        <a class="link-primary" href="https://mcpedl.com/mincraft-vs-zombies-map/">Minecraft Map website</a>
        <a class="link-primary" href="https://archive.org/details/minecraft-vs-zombies-mcworld/">Download Link</a>
    </div>

    <div class="flex flex-col md:flex-row items-center justify-center gap-8 pb-4 pt-4">
        
        <div class="w-full md:w-1/2 max-w-sm">
            <DeviceMockup>
                <img src={map_pic} class="w-auto h-full" alt="Minecraft Map" />
            </DeviceMockup>
        </div>
        
        <div class="w-full md:w-1/2">
            <Youtube id="W4oGn-azmxE" animations={false} altThumb={true}/>
        </div>

    </div>
</MainContent>