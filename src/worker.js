// import wasm from "../../rust-renderer/Cargo.toml";

// async function initialize() {
//   const module = await wasm();
//   const { render } = module;
//   console.log("render is", render);
//   console.log("self is", self);

//   self.onmessage = (event) => {
//     console.log("from onmessage", event);
//     // TODO: Handle messages from the web app
//   };

//   // Let the web app know that we loaded
//   self.postMessage("loaded");
// }

// initialize();

/**
//     At the beginning of the file, we import… um, a Cargo.toml file?
//     Looks weird, right? For now, all you need to know is that this line
//     will magically import our Rust WASM renderer.
//     You’ll see how shortly.
//     We establish a function called initialize, which we then invoke at the bottom of the file.
//      Inside of this function, we:
//         invoke the wasm “file” and get back a module
//         Extract the render function that we created in lib.rs
//         Log the render function
//         Create a method on WorkerGlobalScope.self, called onmessage, that does nothing (for now).
//         onmessage is how the web worker receives events from the web app. This is what we’ll use to trigger a render on the canvas
//         Execute a method on WorkerGlobalScope.self called postMessage, with the single parameter "loaded".
//         This is the opposite of the onmessage method. Which is to say that postMessage is how our worker can send events back to the web app. In this case, we’re letting the web app know that the worker has successfully loaded

  */

import { onMount } from "svelte";
import * as AsBind from "as-bind";

const wasm = fetch("./main.wasm");
export const callWASMmodule = () =>
  onMount(async () => {
    // Instantiate the wasm file, and pass in our importObject
    const asBindInstance = await AsBind.instantiate(wasm, {
      main: {
        consoleLog: (message) => {
          console.log(message);
        },
      },
    });
    // Should call consoleLog, and log: "Hello from AS!"
    asBindInstance.exports.myExportedFunctionThatWillCallConsoleLog();
  });
