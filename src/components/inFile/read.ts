import { readFileSync } from 'fs';
import { exist as fileExist } from "../inDirAndFile/actions";

const optDefault = {
  encoding: "utf8",
}

const readFile = (path, options = optDefault) => {
  const exist = fileExist(path);
  if (!exist) return undefined;

  return readFileSync(path, {
    ...options,
    encoding: options.encoding as BufferEncoding // Conversión explícita
  });
}
export default readFile;
