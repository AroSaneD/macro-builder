import * as robotjs from "robotjs";
import { CommandBuilder } from "./CommandBuilder";

// function rightClick() {
//   robotjs.mouseClick("right");
// }

// rightClick();
function parseParams(args: string[]) {
  // todo: implement
  throw Error("Not implemented");

  // Add flags for each expected action
  // Context-like structure?
  // Depending on flags, add operations (order might be problematic?)
}

const params = parseParams(process.argv);
const b = new CommandBuilder();

// Add filters
