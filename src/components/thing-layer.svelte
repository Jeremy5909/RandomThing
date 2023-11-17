<script lang="ts">
  import Thing from "./thing.svelte";
  import { allExistingThings, selectedId } from "../stores.ts";

  function keydown(e: any) {
    if (e.key.toLowerCase() == "delete" || e.key.toLowerCase() == "backspace") {
      console.log($allExistingThings[$selectedId]);
      // $allExistingThings.splice($selectedId, 1);
      delete $allExistingThings[$selectedId];
    }
  }

  function thingExists(name: string) {}
</script>

<svelte:window on:keydown={keydown} />

<div>
  {#each $allExistingThings as ting}
    <Thing
      classs={ting.itsclass}
      color={ting.itscolor}
      id={ting.itsid}
      left={ting.itsleft}
      top={ting.itstop}
      IOs={ting.itsIO}
    />
  {/each}
</div>
