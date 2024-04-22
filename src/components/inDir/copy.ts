import fse from 'fs-extra'
import { response } from "../inDirAndFile";
import { Response } from "../inDirAndFile/response/response";
import { mkdirSync } from 'fs';
import { execSync } from 'child_process';
// execSync
let optDefault = { overwrite: true };
const copy = (origin: string, destination: string, { overwrite = optDefault.overwrite } = {}): Response => {
  const existOrigin = fse.existsSync(origin);
  if (!existOrigin) return response({
    mensaje: 'Error',
    error: 'El directorio de origen no existe.'
  });
  const existDestination = fse.existsSync(destination);
  if (existDestination && !overwrite) return response({
    mensaje: 'Error',
    error: 'El directorio de destino ya existe.'
  });
  mkdirSync(destination, { recursive: true });
  fse.copySync(origin, destination, { overwrite })
  return response({
    mensaje: `El directorio ${origin} ha sido copiado con éxito en ${destination}.`
  });
}
copy.setOverwrite = (overwrite: boolean) => { optDefault.overwrite = overwrite; }
// console.log(copy('./inDir', './inDir2', { overwrite: true }));
export default copy;