<script>
    import { currentId, colors, names, class_names} from "../stores";
</script>

<div class="text-white bg-neutral-600 absolute top-5 bottom-5 w-60 right-5 rounded-xl p-3">
    <h1 class="font-bold text-5xl">{$names[$currentId]}</h1>
    <h2 class=" text-gray-400">Class: "{$class_names[$currentId]}"</h2>
    <label for="name" class="font-bold">Name: </label> <input type="text" class="rounded-lg bg-neutral-500" id="name" name="name" bind:value={$names[$currentId]}>
    <label for="color" class="font-bold">Color: </label> <input type="color" class="border-2" id="color" name="color" bind:value={$colors[$currentId]}><br>
</div>