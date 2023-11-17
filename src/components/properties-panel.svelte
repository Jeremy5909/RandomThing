<script lang="ts">
  import { selectedId, allExistingThings } from "../stores.ts";

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      $selectedId = -1;
    }
  }
  $: currentClass = $allExistingThings[$selectedId];
</script>

{#if currentClass}
  <div
    id="properties"
    class="text-white bg-neutral-600 absolute top-5 bottom-5 w-60 right-5 rounded-xl p-3"
  >
    <h1 class="font-bold capitalize text-5xl">{currentClass.itsname}</h1>
    <h2 class=" text-gray-400">Class: "{currentClass.itsclass}"</h2>
    <h2 class=" text-gray-400">id: "{currentClass.itsid}"</h2>

    <label for="name" class="font-bold">Name:</label>
    <input
      type="text"
      class="rounded-lg p-0.5 bg-neutral-500"
      id="name"
      name="name"
      bind:value={currentClass.itsname}
    />
    <label for="color" class="font-bold">Color: </label>
    <input
      type="color"
      class="border-2"
      id="color"
      name="color"
      bind:value={$allExistingThings[$selectedId].itscolor}
    /><br />
  </div>
{/if}
<svelte:window on:keydown={onKeyDown} />
