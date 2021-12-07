const ASSEMBLY_SCRIPT_FILENAME = "main";

import { onMount } from "svelte";
import * as AsBind from "as-bind";

const wasm = fetch("./main.wasm");

export let runWasm;

export const initializeWASMmodule = (str = "Default value") =>
  onMount(async () => {
    // Instantiate the wasm file, and pass in our importObject
    const asBindInstance = await AsBind.instantiate(wasm, {
      [ASSEMBLY_SCRIPT_FILENAME]: {
        consoleLog: (message) => {
          console.log(message);
        },
      },
    });
    // Should call consoleLog, and log: "Hello from AS!"; Initial call
    asBindInstance.exports.myExportedFunctionThatWillCallConsoleLog(str);

    runWasm = asBindInstance.exports.myExportedFunctionThatWillCallConsoleLog;
  });
