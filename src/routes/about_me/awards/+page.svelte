<script lang="ts">
   	import MainContent from "$lib/components/MainContent.svelte";
    import {title, awards} from "$lib/stores/awards"
    import { year_month_formatDate } from "$lib/utils/formatDate";
</script>

<MainContent>
	<h1 class="text-center ">
		{title}
	</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 *:p-2">
	    {#each Object.entries(awards) as [name, item] (name)} 
			<div class="max-w-md mx-auto group">
				<a href={item.link} target="_blank" rel="external">
					<div class="grid grid-cols-[auto_1fr] bg-white rounded-xl shadow-md overflow-hidden border border-neutral-100">
						<img src={item.image_link} alt={name} class="w-24 sm:w-32 aspect-square object-cover"/>
						
						<div class="flex flex-col justify-center p-4 min-w-0">
								<strong class="text-neutral-900 group-hover:text-fuchsia-500">{name}: </strong>
							<p class="text-sm text-neutral-700 truncate sm:whitespace-normal">
								{item.description}
							</p>
							<span class="block italic text-xs text-neutral-500 mt-1">
								Issued on {year_month_formatDate(item.issued_date)}
							</span>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</MainContent>