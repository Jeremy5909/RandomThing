<script lang="ts">
  import { IOKind, selectedId } from "../stores";
  export let classs: string;
  export let color: string;
  export let id: number;
  export let left: number;
  export let top: number;
  export let inputs: IOKind[];
  export let outputs: IOKind[];
  export let outputDragged: (e: DragEvent, x: number, y: number) => void;

  // Selection
  let border_width = "0";

  $: if ($selectedId === id) {
    border_width = "2";
  } else {
    border_width = "0";
  }

  // Draggableness
  let moving = false;

  function onMouseDown() {
    moving = true;
    selectedId.set(id);
  }

  function onMouseMove(e: any) {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }

  function onMouseUp() {
    moving = false;
  }
</script>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div>
  <div
    on:mousedown={onMouseDown}
    style="left: {left - 48}px; top: {top - 48}px; background-color:{color}"
    class="cursor-move rounded-full w-24 h-24 absolute flex select-none justify-center border-{border_width}"
  >
    <img
      draggable="false"
      src={"./icons/" + classs + ".svg"}
      alt=""
      class="m-3 text-white capitalize font-bold"
    />
  </div>
  {#each inputs as input}
    <div
      style="left: {left - 48 - 8}px; top:{top - 8}px;"
      class="rounded-full bg-red-400 w-4 h-4 absolute"
    />
  {/each}
  {#each outputs as output}
    <div
      style="left: {left + 48 - 8}px; top:{top - 8}px;"
      class="rounded-full bg-green-400 w-4 h-4 absolute cursor-pointer"
      on:drag={(e) => outputDragged(e, left - 48 - 8, top - 8)}
    />
  {/each}
</div>
