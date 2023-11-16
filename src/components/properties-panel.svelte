<script>
  import { selectedId } from "../stores.ts";

  function onKeyDown(e) {
    if (e.key === "Escape") {
      $selectedId = undefined;
    }
  }
</script>

{#if $selectedId}
  <div
    id="properties"
    class="text-white bg-neutral-600 absolute top-5 bottom-5 w-60 right-5 rounded-xl p-3"
  >
    <h1 class="font-bold capitalize text-5xl">a</h1>
    <h2 class=" text-gray-400">Class: ""</h2>
    <h2 class=" text-gray-400">id: ""</h2>

    <label for="name" class="font-bold">Name: </label>
    <input
      type="text"
      class="rounded-lg p-0.5 bg-neutral-500"
      id="name"
      name="name"
    />
    <label for="color" class="font-bold">Color: </label>
    <input type="color" class="border-2" id="color" name="color" /><br />
  </div>
{/if}
<svelte:window on:keydown={onKeyDown} />
