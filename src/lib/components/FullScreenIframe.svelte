<script lang="ts">
    import title_from_url from '$lib/utils/title_from_url'
    
    interface Props { url: string; }
    let { url = "/" }: Props = $props();
</script>

<div class="w-full h-screen flex flex-col">
    <iframe 
        title={title_from_url(url)} 
        src={url + "#zoom=FitW"}
        class="w-full grow border-none"
    ></iframe>
</div>