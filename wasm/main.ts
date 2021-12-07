declare function consoleLog(message: string): void;

export function myExportedFunctionThatWillCallConsoleLog(str: string): string {
  consoleLog("FROM ASSEMBLY SCRIPT: " + str);
  return str.toUpperCase();
}
