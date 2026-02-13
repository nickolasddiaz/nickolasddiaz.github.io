<script lang="ts">
   	import MainContent from "$lib/components/MainContent.svelte";
    import {title, awards} from "$lib/stores/awards"
    import { year_month_formatDate } from "$lib/utils/formatDate";
</script>

<MainContent>
	<h1 class="text-center ">
		{title}
	</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 *:p-8">
	    {#each Object.entries(awards) as [name, item] (name)} 
			<div>
    			<div class="flex">
    				<img src={item.image_link} alt={name} style="max-width: 10vw;"/>
                    <span style="h-full">
                        <a href={item.link} target="_blank" rel="external">
             			<strong>{name}:</strong>
             			</a>{item.description} 
                	    <span class="block italic text-neutral-600">
                            Issued on {year_month_formatDate(item.issued_date)}</span>
                        </span>
    			</div>
				
			</div>
		{/each}
	</div>
</MainContent>