<script>
    import { currentId, color } from "../stores";

</script>

<div class="text-white bg-neutral-600 absolute top-5 bottom-5 w-60 right-5 rounded-xl p-3">
    <h1 class=" font-bold text-5xl">{$currentId}</h1>
    <label for="color">Color: </label> <input type="color" class=" bg-transparent" id="color" name="color" bind:value={$color} >
</div>