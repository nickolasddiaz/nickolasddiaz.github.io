<script lang="ts">
  import MainContent from "#lib/components/MainContent.svelte";
  import dababy_nuke from "#lib/assets/dababy-nuke.gif";

  import { DeviceMockup } from "flowbite-svelte";
  import Youtube from "svelte-youtube-embed";
  import map_pic from "#lib/assets/minecraft_map.png";
  import codepen_pic from "#lib/assets/codepen-bimi.svg";
  import sketchfab from "#lib/assets/sketchfab-logo-text.svg";
  import newground from "#lib/assets/newgrounds-logo.svg";
  import itchio from "#lib/assets/itchio-logo.svg";
</script>

<MainContent>
  <br />
  <h2>My Meme</h2>
  <hr />
  <br />
  <p>
    Here is my meme called "DaBaby Nuke". Inspired by the
    <a
      class="link-primary"
      href="https://en.wikipedia.org/wiki/File:Dababy_BabyOnBaby.jpg">DaBaby</a
    >
    and
    <a
      class="link-primary"
      href="https://x.com/_OhhBass/status/854609365822779392">Trump Nuke</a
    >
    Meme. It has over 200 shares on
    <a
      class="link-primary"
      href="https://tenor.com/view/dababy-nuke-trigger-button-gif-3126293719315626815"
      >Tenor</a
    >!!! I replaced the face of Trump with the face of DaBaby creating a
    hilarious meme.
  </p>

  <img class="place-self-center p-4" src={dababy_nuke} alt="DaBaby Nuke" />

  <br />
  <h2>My Minecraft Map</h2>
  <hr />
  <br />

  <div>
    <p class="text-lg">
      Here is my Minecraft Bedrock Map created on 13 May, 2020. It has over 187
      thousand downloads on the mobile app "Addons for Minecraft!!!"
    </p>
    <a class="link-primary" href="https://mcpedl.com/mincraft-vs-zombies-map/"
      >Minecraft Map website</a
    >
    <a
      class="link-primary"
      href="https://archive.org/details/minecraft-vs-zombies-mcworld_202608"
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
  <br />
  <h2>My code pen showcase</h2>
  <hr />
  <br />
  <a
    href="https://codepen.io/nickolasddiaz/pens/public"
    target="_blank"
    rel="noopener noreferrer"
    class="flex w-full items-start gap-2.5 rounded-xl border border-gray-300 bg-white px-3.5 py-3 text-inherit no-underline shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
  >
    <img src={codepen_pic} alt="My codepen" class="h-8 shrink-0 rounded-lg" />
    <div class="min-w-0 flex-1">
      <div
        class="mb-0.5 items-center text-center text-[20px] leading-[1.4] text-gray-500"
      >
        My codepen showcase for my HTML/CSS/JS web scripts.
      </div>
    </div>
  </a>
  <br />
  <h2>My sketchfab showcase</h2>
  <hr />
  <br />
  <a
    href="https://sketchfab.com/NickolasDaniel"
    target="_blank"
    rel="noopener noreferrer"
    class="flex w-full items-start gap-2.5 rounded-xl border border-gray-300 bg-white px-3.5 py-3 text-inherit no-underline shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
  >
    <img src={sketchfab} alt="My codepen" class="h-8 shrink-0 rounded-lg" />
    <div class="min-w-0 flex-1">
      <div
        class="mb-0.5 items-center text-center text-[20px] leading-[1.4] text-gray-500"
      >
        My sketchfab for my 3D meshes.
      </div>
    </div>
  </a>
  <br />
  <h2>My newgrounds profile</h2>
  <hr />
  <br />
  <a
    href="https://nickolasdan.newgrounds.com/"
    target="_blank"
    rel="noopener noreferrer"
    class="flex w-full items-start gap-2.5 rounded-xl border border-gray-300 bg-white px-3.5 py-3 text-inherit no-underline shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
  >
    <img src={newground} alt="My codepen" class="h-8 shrink-0 rounded-lg" />
    <div class="min-w-0 flex-1">
      <div
        class="mb-0.5 items-center text-center text-[20px] leading-[1.4] text-gray-500"
      >
        My newgrounds for my video games.
      </div>
    </div>
  </a>
  <br />
  <h2>My itch.io profile</h2>
  <hr />
  <br />
  <a
    href="https://nickolasdan.itch.io/"
    target="_blank"
    rel="noopener noreferrer"
    class="flex w-full items-start gap-2.5 rounded-xl border border-gray-300 bg-white px-3.5 py-3 text-inherit no-underline shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
  >
    <img src={itchio} alt="My codepen" class="h-8 shrink-0 rounded-lg" />
    <div class="min-w-0 flex-1">
      <div
        class="mb-0.5 items-center text-center text-[20px] leading-[1.4] text-gray-500"
      >
        My itch.io for my video games.
      </div>
    </div>
  </a>
  <br />
  <br />
</MainContent>
