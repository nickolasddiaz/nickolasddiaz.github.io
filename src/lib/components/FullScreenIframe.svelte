<script lang="ts">
    import title_from_url from '$lib/utils/title_from_url'
    
    interface Props { url: string; }
    let { url = "/" }: Props = $props();
</script>

<div class="w-full h-screen flex flex-col overflow-hidden">
    <div class="w-full grow overflow-auto [-webkit-overflow-scrolling:touch]">
        <iframe 
            title={title_from_url(url)} 
            src={url + "#zoom=FitW"}
            class="w-px min-w-full h-full border-none"
        ></iframe>
    </div>
</div>