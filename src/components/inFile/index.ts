import { del, getStats, move, rename } from "../inDirAndFile/actions";
import write from "./write";

const functions = {
  write,
  del,
  move,
  rename,
  getStats,
}
export {
  functions as default,
  write,
  del,
  move,
  rename,
  getStats,
}
