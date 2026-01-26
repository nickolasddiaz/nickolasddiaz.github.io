<script lang="ts">
  import type { Paper } from '$lib/data/papers';

  let { paper }: { paper: Paper } = $props();

  function openPopup(url: string) {
    const iframe = document.getElementById('popup-iframe') as HTMLIFrameElement;
    const overlay = document.getElementById('overlay') as HTMLElement;
    const popup = document.getElementById('popup') as HTMLElement;

    iframe.src = url;
    overlay.style.display = 'block';
    popup.style.display = 'block';

    // Add click event listener for closing the popup
    overlay.addEventListener("click", function() {
      overlay.style.display = "none";
      popup.style.display = "none";
      iframe.src = "";
    });

  }
</script>

<div class="card">
  <div class="text-title">{paper.title}</div>
  <div class="card-image"></div>
  <button class="card-description" onclick={() => openPopup(paper.url)}>
    <div>Click Me</div>
  </button>
</div>

<style>
  .card {
    height: auto;
    aspect-ratio: 1 / 1;
    width: 100%;
    overflow: hidden;
    max-width: 19vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0;
  }

  .card-image {
    max-width: 100%;
    height: auto;
  }

  .card-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f5f5f5;
    padding-bottom: 1rem;
    flex-grow: 1;
    flex-basis: 50%;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s;
  }

  .card-description:hover {
    background-color: #e0e0e0;
  }

  .text-title {
    background: #4286f4;
    padding: 0.5rem;
    text-overflow: ellipsis;
    text-align: center;
    flex-grow: 1;
    flex-basis: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>