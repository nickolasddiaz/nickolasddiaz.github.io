<script lang="ts">
  import MainContent from "#lib/components/MainContent.svelte";
  import { title, awards } from "#lib/stores/awards.js";
  import { year_month_formatDate } from "#lib/utils/formatDate.js";
</script>

<MainContent>
  <br />
  <h2>Display of my awards</h2>
  <hr />
  <br />
  <p class="paragraph-text">
    {title}
  </p>
  <br />

  <div class="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">
    {#each Object.entries(awards) as [name, item] (name)}
      <div class="group h-full w-full">
        <a href={item.link} target="_blank" rel="external" class="block h-full">
          <div
            class="relative h-64 w-full overflow-hidden rounded-xl border border-neutral-100 bg-cover bg-center shadow-md"
            style="background-image: url({item.image_link});"
          >
            <div
              class="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/20 transition-opacity group-hover:opacity-90"
            ></div>
            <div
              class="relative z-10 flex h-full min-w-0 flex-col justify-end p-5"
            >
              <strong
                class="text-lg font-bold text-white transition-colors group-hover:text-secondary-300"
              >
                {name}
              </strong>
              <p class="mt-1 line-clamp-2 text-sm text-neutral-200">
                {item.description}
              </p>
              <span class="mt-2 block text-xs text-neutral-400 italic">
                Issued on {year_month_formatDate(item.issued_date)}
              </span>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</MainContent>
