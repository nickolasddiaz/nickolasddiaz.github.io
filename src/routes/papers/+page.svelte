<script lang="ts">
    import MainContent from "$lib/components/MainContent.svelte";
    import getPapers from "$lib/data/papers"
    
    const papers = getPapers()
    
    let selectedPdfUrl = '';
    let dialog: HTMLDialogElement;
    
    function openPdfDialog(url: string) {
        selectedPdfUrl = url;
        dialog?.showModal();
    }
    
    function closePdfDialog() {
        dialog?.close();
        selectedPdfUrl = '';
    }
</script>

<MainContent>
    <h3>The following collection comprises all of my academic papers, ranging from my 9th-grade assignments to my college-level coursework. The total number of essays displayed are {papers.length}.</h3>
    
    <div class="card-grid">
        {#each papers as item (item.title)} 
            <button class="card" on:click={() => openPdfDialog(item.url)}>
                <div class="container"> 
                    <p>{item.title}</p> 
                </div>
            </button>
        {/each}
    </div>
</MainContent>

<dialog bind:this={dialog} class="pdf-dialog">
    <div class="dialog-content">
        <button class="close-button" on:click={closePdfDialog}>✕ Close PDF</button>
        
        {#if selectedPdfUrl}
            <iframe 
                title="paper" 
                src={selectedPdfUrl}
                class="pdf-iframe"
            ></iframe>
        {/if}
    </div>
</dialog>

<style>
    .card-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-top: 2rem;
    }
    
    @media (max-width: 1024px) {
        .card-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media (max-width: 640px) {
        .card-grid {
            grid-template-columns: 1fr;
        }
    }
    
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        background: white;
        border: none;
        cursor: pointer;
        padding: 0;
        width: 100%;
    }
    
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transform: translateY(-2px);
    }
    
    .container {
        padding: 1rem;
    }
    
    .container p {
        margin: 0;
        text-align: left;
    }
    
    .pdf-dialog {
        max-width: 90vw;
        max-height: 90vh;
        width: 1200px;
        padding: 0;
        border: none;
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }
    
    .pdf-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .dialog-content {
        display: flex;
        flex-direction: column;
        height: 90vh;
        max-height: 800px;
    }
    
    .close-button {
        padding: 0.75rem 1.5rem;
        background-color: #f44336;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s;
    }
    
    .close-button:hover {
        background-color: #d32f2f;
    }
    
    .pdf-iframe {
        flex: 1;
        border: none;
        width: 100%;
    }
</style>