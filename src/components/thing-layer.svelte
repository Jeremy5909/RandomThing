<script lang="ts">
  import Thing from "./thing.svelte";
  import { allExistingThings, selectedId } from "../stores.ts";

  function keydown(e: KeyboardEvent) {
    if (e.key.toLowerCase() == "delete" || e.key.toLowerCase() == "backspace") {
      console.log($allExistingThings[$selectedId]);
      // $allExistingThings.splice($selectedId, 1)
      delete $allExistingThings[$selectedId];
    }
  }
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
      inputs={ting.itsInputs}
      outputs={ting.itsOutputs}
    />
  {/each}
</div>
