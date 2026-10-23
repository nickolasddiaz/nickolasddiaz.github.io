<script lang="ts">
  import MainContent from "#lib/components/MainContent.svelte";
  import { title, awards } from "#lib/stores/awards.js";
  import { year_month_formatDate } from "#lib/utils/formatDate.js";
</script>

<MainContent>
  <p class="paragraph-text">
    {title}
  </p>

  <div class="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">
    {#each Object.entries(awards) as [name, item] (name)}
      <div class="group h-full w-full">
        <a href={item.link} target="_blank" rel="external" class="block h-full">
          <div
            class="flex h-full overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-md"
          >
            <img
              src={item.image_link}
              alt={name}
              class="h-full w-32 shrink-0 object-cover md:w-40"
            />

            <div class="flex min-w-0 flex-col justify-center p-4">
              <strong class="text-neutral-900 group-hover:text-fuchsia-500"
                >{name}</strong
              >
              <p class="text-sm text-neutral-700">
                {item.description}
              </p>
              <span class="mt-1 block text-xs text-neutral-500 italic">
                Issued on {year_month_formatDate(item.issued_date)}
              </span>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</MainContent>
