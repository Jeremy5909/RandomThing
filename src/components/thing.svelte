<script>
  import { currentId, colors, names, class_names} from "../stores";
  export let class_name = "default";
  export let id;

  $names[id]=class_name;
  $class_names[id]=class_name;
  const minX = 0;
  const maxX = 400;
  const minY = 0;
  const maxY = 400;

  let left = Math.floor(Math.random() * (maxX-minX+1)+minX);
  let top = Math.floor(Math.random() * (maxY-minY+1)+minY);

  let moving = false;

  function onMouseDown() {
    moving = true;
    currentId.set(id);
    console.log($colors[id])
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
  style=" left: {left}px; top: {top}px; background-color:{$colors[id]}"
  class="cursor-move rounded-full w-24 h-24 absolute flex select-none justify-center"
>
  <img
    draggable="false"
    src={"./icons/" + class_name + ".svg"}
    alt={class_name}
    class="m-3"
  />
</div>
