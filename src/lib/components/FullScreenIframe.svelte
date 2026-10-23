<script lang="ts">
  import title_from_url from "#lib/utils/title_from_url.js";

  interface Props {
    url: string;
  }
  let { url = "/" }: Props = $props();
</script>

<div class="flex h-screen w-full flex-col overflow-hidden">
  <div class="w-full grow overflow-auto [-webkit-overflow-scrolling:touch]">
    <iframe
      title={title_from_url(url)}
      src={url + "#zoom=FitW"}
      class="h-full w-px min-w-full border-none"
    ></iframe>
  </div>
</div>
