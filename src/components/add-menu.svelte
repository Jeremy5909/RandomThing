<script lang="ts">
  import { allExistingThings, existingThing } from "../stores";

  let shown = false;
  let mouseX: number;
  let mouseY: number;

  let clickedX: number;
  let clickedY: number;

  function mouseMove(e: any) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function keydown(e: any) {
    switch (e.key.toLowerCase()) {
      case "a":
        if (e.getModifierState("Shift")) {
          clickedX = mouseX;
          clickedY = mouseY;
          shown = true;
        }
        break;
      case "escape":
        shown = false;
    }
  }

  function thingClicked(option: string) {
    $allExistingThings.push(
      new existingThing(option, option, clickedX, clickedY)
    );
    $allExistingThings = $allExistingThings;

    shown = false;
  }
</script>

<svelte:window on:keydown={keydown} on:mousemove={mouseMove} />

{#if shown}
  <div
    style="left:{clickedX}px; top:{clickedY}px;"
    class="p-1 w-36 text-sm rounded absolute bg-gradient-to-br border-neutral-500 border-[1px] from-neutral-800 to-neutral-700 text-white"
  >
    <h1 class="font-bold">Create New</h1>
    <hr class=" border-neutral-700 my-1" />
    {#each ["light", "button", "fan"] as c}
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <p
        on:click={() => thingClicked(c)}
        class="hover:bg-neutral-500 p-[0.125rem] rounded capitalize cursor-pointer active:bg-neutral-400 active:text-neutral-800"
      >
        {c}
      </p>
    {/each}
  </div>
{/if}
