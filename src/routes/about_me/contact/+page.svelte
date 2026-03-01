<script lang="ts">
    import { Tabs, TabItem } from "flowbite-svelte";
    import MainContent from "$lib/components/MainContent.svelte";
    import FullScreenIframe from "$lib/components/FullScreenIframe.svelte";
    import SocialMedia from "$lib/components/SocialMedia.svelte";


    import Web3form from "$lib/components/Web3form.svelte";
    import { resolve } from '$app/paths';
    const url = resolve("/resume/resume.pdf");  
</script>


<MainContent>
    <Tabs tabStyle="underline">
        <TabItem title="Contact me">
            <Web3form></Web3form>
        </TabItem>
        <TabItem title=Resume>
            <FullScreenIframe {url}></FullScreenIframe>
        </TabItem>
        <TabItem title="Social Media">
            <SocialMedia></SocialMedia>
        </TabItem>
    </Tabs>
</MainContent>
