import { del, getStats, move, rename, exist } from "../file";
import read from "./read";
import add from "./add";

const functions = {
  add,
  read,
  exist,
  rename,
  move,
  del,
  getStats,
}
export {
  functions as default,
  add,
  read,
  exist,
  rename,
  move,
  del,
  getStats,
}
