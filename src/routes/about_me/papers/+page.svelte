<script lang="ts">
  import MainContent from "#lib/components/MainContent.svelte";
  // prettier-ignore
  import { topic_types, papers, total_pages, total_words, type Paper, FILTYPE, sortPapers, } from "#lib/stores/paper_types.js";
  import { year_month__day_formatDate } from "#lib/utils/formatDate.js";
  import { Document } from "flexsearch";
  // prettier-ignore
  import { Button, Dropdown, Radio, Datepicker, Search, Modal, } from "flowbite-svelte";
  import { FilterOutline } from "flowbite-svelte-icons";

  let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
    from: undefined,
    to: undefined,
  });

  let searchQuery = $state("");
  let filter = $state(FILTYPE.Newest);

  const index = new Document<Paper>({
    document: {
      id: "url",
      index: ["title", "topic"],
      store: true,
    },
    tokenize: "forward",
  });

  papers.forEach((p) => index.add(p));

  function highlightText(text: string, query: string): string {
    if (!query.trim()) {
      return text;
    }

    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedQuery})`, "gi");
    return text.replace(
      regex,
      '<mark class="highlight bg-fuchsia-300">$1</mark>',
    );
  }

  let results = $derived.by(() => {
    let searchResults: Paper[];
    if (searchQuery.trim() === "") {
      searchResults = papers;
    } else {
      const searchOutput = index.search(searchQuery, { enrich: true });
      const rawResults = searchOutput.flatMap((fieldResult) =>
        fieldResult.result.map((res) => res.doc),
      );
      const validPapers = rawResults.filter((doc): doc is Paper => doc != null);
      searchResults = [...new Set(validPapers)];
    }

    searchResults = sortPapers(searchResults, filter);

    return searchResults.filter((paper) => {
      if (dateRange.from) {
        const after = Temporal.PlainDate.from({
          year: dateRange.from.getFullYear(),
          month: dateRange.from.getMonth() + 1,
          day: dateRange.from.getDate(),
        });
        if (Temporal.PlainDate.compare(paper.date, after) <= 0) {
          return false;
        }
      }

      if (dateRange.to) {
        const before = Temporal.PlainDate.from({
          year: dateRange.to.getFullYear(),
          month: dateRange.to.getMonth() + 1,
          day: dateRange.to.getDate(),
        });
        if (Temporal.PlainDate.compare(paper.date, before) >= 0) {
          return false;
        }
      }

      return true;
    });
  });

  let selectedPdfUrl = $state("");
  let defaultModal = $state(false);

  function openPdfDialog(url: string) {
    selectedPdfUrl = url;
    defaultModal = true;
  }
</script>

<MainContent>
  <br />
  <h2>Academic Papers</h2>
  <hr />
  <br />
  <p class="paragraph-text">
    The following collection comprises all of my academic papers, ranging from
    my 9th-grade assignments to my college-level coursework. The total number of
    essays displayed are {papers.length}, total pages: {total_pages}, total
    words: {total_words}.
  </p>
  <br />
  <div class="flex flex-wrap items-center justify-between gap-4">
    <Search bind:value={searchQuery} class="w-full md:flex-1" />
    <Datepicker
      range
      bind:rangeFrom={dateRange.from}
      bind:rangeTo={dateRange.to}
      color="blue"
      class="w-auto z-50"
    />

    <Button
      >Filter<FilterOutline
        class="ms-2 h-6 w-6 text-white dark:text-white"
      /></Button
    >
    <Dropdown simple class="*:p-2">
      <li>
        <Radio name="filter" bind:group={filter} value={FILTYPE.Newest}
          >Newest</Radio
        >
      </li>
      <li>
        <Radio name="filter" bind:group={filter} value={FILTYPE.Oldest}
          >Oldest</Radio
        >
      </li>
      <li>
        <Radio name="filter" bind:group={filter} value={FILTYPE.Word}
          >Word Count</Radio
        >
      </li>
      <li>
        <Radio name="filter" bind:group={filter} value={FILTYPE.Page}
          >Page Count</Radio
        >
      </li>
      <li>
        <Radio name="filter" bind:group={filter} value={FILTYPE.Alph}
          >Alphbetical</Radio
        >
      </li>
      <li>
        <Radio name="filter" bind:group={filter} value={FILTYPE.Rev}
          >Reverse</Radio
        >
      </li>
    </Dropdown>
  </div>
  <br />

  <div
    class="grid grid-cols-2 gap-2 p-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
  >
    {#each results as item (item.title)}
      <button
        style="background-color: {topic_types[item.topic]!
          .background_color}; background-image: url({topic_types[item.topic]!
          .pic});"
        class="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-neutral-100/20 bg-size-[auto_65%] bg-center bg-no-repeat p-2 text-left text-white shadow-md md:gap-3"
        onclick={() => openPdfDialog(item.url)}
      >
        <div
          class="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/20 transition-opacity group-hover:opacity-90"
        ></div>

        <div
          class="relative z-10 flex h-full min-w-0 flex-col justify-end p-5 text-xs md:text-sm lg:text-base"
        >
          <div class="truncate font-medium text-white group-hover:text-secondary-300">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html highlightText(item.title, searchQuery)}
          </div>
          <div class="text-gray-300">
            {year_month__day_formatDate(item.date)}
          </div>
          <div class="text-gray-300">
            Words: {item.word_count}
          </div>
          <div class="text-gray-300">
            Pages: {item.page_count}
          </div>
        </div>
      </button>
    {:else}
      <p>No papers found matching your criteria.</p>
    {/each}
  </div>
</MainContent>

<Modal
  title={decodeURIComponent(selectedPdfUrl.split("/").at(-1)!)}
  bind:open={defaultModal}
  class="mx-auto block h-auto w-[90vw] max-w-none! border border-solid"
  classes={{ body: "p-0 flex-1 overflow-hidden" }}
>
  {#if selectedPdfUrl}
    <div class="flex h-full w-full flex-col">
      <iframe
        title="paper"
        src={selectedPdfUrl + "#zoom=FitW"}
        class="w-full flex-1 border-0"
      ></iframe>
    </div>
  {/if}
</Modal>
