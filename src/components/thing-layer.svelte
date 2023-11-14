<script>
  import Thing from "./thing.svelte";
  import { allExistingThings } from "../stores.ts";
</script>

<div>
  {#each $allExistingThings as ting, i}
    <Thing
      class_name={ting.itsclass}
      id={i + 1}
      left={ting.itsleft}
      top={ting.itstop}
    />
  {/each}
</div>
