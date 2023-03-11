import { del, getStats, move, rename, exist } from "../inDirAndFile/actions";
import read from "./read";
import write from "./write";


const functions = {
  read,
  write,
  del,
  move,
  rename,
  getStats,
  exist
}
export {
  functions as default,
  read,
  write,
  del,
  move,
  rename,
  getStats,
  exist
}
