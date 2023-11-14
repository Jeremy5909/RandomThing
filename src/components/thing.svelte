<script>
  import { currentId, colors, names, class_names } from "../stores";
  export let class_name;
  export let id;
  export let left;
  export let top;

  // Store props
  $names[id] = class_name;
  $class_names[id] = class_name;

  // Selection
  let border_width = "0";

  $: if ($currentId === id) {
    border_width = "2";
  } else {
    border_width = "0";
  }

  // Draggableness
  let moving = false;

  function onMouseDown() {
    moving = true;
    currentId.set(id);
  }

  function onMouseMove(e) {
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
  style=" left: {left - 48}px; top: {top - 48}px; background-color:{$colors[
    id
  ]}"
  class="cursor-move rounded-full w-24 h-24 absolute flex select-none justify-center border-{border_width}"
>
  <img
    draggable="false"
    src={"./icons/" + class_name + ".svg"}
    alt={class_name}
    class="m-3"
  />
</div>
