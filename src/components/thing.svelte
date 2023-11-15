<script lang="ts">
  import { selectedId } from "../stores";
  export let classs: string;
  export let name: string;
  export let color: string;
  export let id: number;
  export let left: number;
  export let top: number;

  export class existingThing {
    itsclass;
    itsname;
    itscolor = "525252";
    itsleft;
    itstop;
    selected = false;
    constructor(
      itsclass: string,
      itsname: string,
      itsleft: number,
      itstop: number
    ) {
      this.itsclass = itsclass;
      this.itsname = itsname;
      this.itsleft = itsleft;
      this.itstop = itstop;
      console.log("Yess King");
    }
  }

  // // Store props
  // $names[id] = class_name;
  // $class_names[id] = class_name;

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
<div
  on:mousedown={onMouseDown}
  style=" left: {left - 48}px; top: {top - 48}px; background-color:{color}"
  class="cursor-move rounded-full w-24 h-24 absolute flex select-none justify-center border-{border_width}"
>
  <img
    draggable="false"
    src={"./icons/" + classs + ".svg"}
    alt={classs}
    class="m-3"
  />
</div>
