import read from "./read";
import { del, getStats, move, rename, exist } from "../inFile";

const functions = {
  read,
  rename,
  move,
  del,
  getStats,
  exist,
}
export {
  functions as default,
  read,
  rename,
  move,
  del,
  getStats,
  exist,
}
