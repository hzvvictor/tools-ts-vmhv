import { del, getStats, move, rename, exist } from "../inFile";
import read from "./read";
import add from "./add";
import copy from "./copy";
const functions = {
  copy,
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
  copy,
  add,
  read,
  exist,
  rename,
  move,
  del,
  getStats,
}
