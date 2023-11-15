<script>
  import Thing from "./thing.svelte";
  import { allExistingThings } from "../stores.ts";
</script>

<div>
  {#each $allExistingThings as ting, i}
    <Thing
      classs={ting.itsclass}
      color={ting.itscolor}
      id={i + 1}
      left={ting.itsleft}
      top={ting.itstop}
    />
  {/each}
</div>
