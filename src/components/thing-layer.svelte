<script>
  import Thing from "./thing.svelte";
  import { allExistingThings } from "../stores.ts";
</script>

<div>
  {#each $allExistingThings as ting}
    <Thing
      classs={ting.itsclass}
      color={ting.itscolor}
      id={ting.itsid}
      left={ting.itsleft}
      top={ting.itstop}
    />
  {/each}
</div>
