<script lang="ts">
  import { DeviceMockup } from "flowbite-svelte";
  import MainContent from "#lib/components/MainContent.svelte";
  import Youtube from "svelte-youtube-embed";
  import map_pic from "#lib/assets/minecraft_map.jpg";
</script>

<MainContent>
  <div class="paragraph-text">
    <p class="text-lg">
      Here is my Minecraft Bedrock Map created on 13 May, 2020. It has over 187
      thousand downloads on the mobile app "Addons for Minecraft!!!"
    </p>
    <a class="link-primary" href="https://mcpedl.com/mincraft-vs-zombies-map/"
      >Minecraft Map website</a
    >
    <a
      class="link-primary"
      href="https://archive.org/details/minecraft-vs-zombies-mcworld/"
      >Download Link</a
    >
  </div>

  <div
    class="flex flex-col items-center justify-center gap-8 pt-4 pb-4 md:flex-row"
  >
    <div class="w-full max-w-sm md:w-1/2">
      <DeviceMockup>
        <img src={map_pic} class="h-full w-auto" alt="Minecraft Map" />
      </DeviceMockup>
    </div>

    <div class="w-full md:w-1/2">
      <Youtube
        id="W4oGn-azmxE"
        animations={false}
        altThumb={true}
        thumbnail={undefined}
        play_button={undefined}
      />
    </div>
  </div>
</MainContent>
