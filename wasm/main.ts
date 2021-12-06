declare function consoleLog(message: string): void;

export function myExportedFunctionThatWillCallConsoleLog(): void {
  consoleLog("Hello from AS!");
}
