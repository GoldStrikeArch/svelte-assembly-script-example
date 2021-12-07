<script>
  import { initializeWASMmodule, runWasm } from "./initializeWASMmodule";

  let value = "";
  let transformedValue = "";

  initializeWASMmodule();

  // $: if (value) {
  //   transformedValue = runWasm(value);
  // }

  $: if (runWasm) {
    transformedValue = runWasm(value);
  }
</script>

<main>
  <h1>Svelte + Assembly Script</h1>
  <textarea bind:value />
  <p>{transformedValue}</p>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  textarea {
    align-self: flex-start;
    width: 400px;
    height: 300px;
  }
</style>
