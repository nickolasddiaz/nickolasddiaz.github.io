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
      console.error(error);
      alert(error);
    }
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="mx-auto max-w-md space-y-4 rounded-lg bg-white p-6 shadow-md"
>
  <input
    type="hidden"
    name="access_key"
    value="382553ae-1184-4e66-bf07-b498ac7b12ad"
  />

  <div>
    <label for="name" class="block text-sm font-medium text-gray-700"
      >Name</label
    >
    <input
      id="name"
      type="text"
      name="name"
      required
      class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-primary-500 focus:ring-primary-500"
    />
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-gray-700"
      >Email</label
    >
    <input
      id="email"
      type="email"
      name="email"
      required
      class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-primary-500 focus:ring-primary-500"
    />
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-gray-700"
      >Message</label
    >
    <textarea
      id="message"
      name="message"
      required
      rows="4"
      class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-primary-500 focus:ring-primary-500"
    ></textarea>
  </div>

  <button
    type="submit"
    disabled={status === "loading"}
    class="w-full rounded bg-primary-500 px-4 py-2 font-bold text-white transition hover:bg-primary-600 disabled:opacity-50"
  >
    {status === "loading" ? "Sending..." : "Submit Form"}
  </button>

  {#if status === "success"}
    <p class="mt-2 text-center font-medium text-green-600">
      Message sent successfully!
    </p>
  {:else if status === "error"}
    <p class="mt-2 text-center font-medium text-red-600">
      Something went wrong. Please try again.
    </p>
  {/if}
</form>
