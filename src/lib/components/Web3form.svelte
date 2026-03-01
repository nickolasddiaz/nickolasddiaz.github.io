<script lang="ts">
  let status = "";

  async function handleSubmit(event: Event) {
    status = "loading";
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        status = "success";
        (event.target as HTMLFormElement).reset();
      } else {
        status = "error";
      }
    } catch (error) {
      status = "error";
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
  <input type="hidden" name="access_key" value="382553ae-1184-4e66-bf07-b498ac7b12ad" />

  <div>
    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
    <input id="name" type="text" name="name" required 
      class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500" />
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <input id="email" type="email" name="email" required 
      class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500" />
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
    <textarea id="message" name="message" required rows="4"
      class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
  </div>

  <button type="submit" disabled={status === 'loading'}
    class="w-full bg-primary-500 text-white font-bold py-2 px-4 rounded hover:bg-primary-600 transition disabled:opacity-50">
    {status === 'loading' ? 'Sending...' : 'Submit Form'}
  </button>

  {#if status === "success"}
    <p class="text-green-600 text-center font-medium mt-2">Message sent successfully!</p>
  {:else if status === "error"}
    <p class="text-red-600 text-center font-medium mt-2">Something went wrong. Please try again.</p>
  {/if}
</form>