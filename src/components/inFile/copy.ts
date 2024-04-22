import { copyFileSync } from 'fs';
import { exist as fileExist } from "../inDirAndFile/actions";
import { response } from '../inDirAndFile';


const copyFile = (origin: string, destination: string, { overwrite = false } = {}) => {
  const exist = fileExist(origin);
  if (!exist && !overwrite) return response({
    mensaje: 'Error',
    error: 'El archivo de origen no existe.'
  });

  copyFileSync(origin, destination);
  return response({
    mensaje: `El archivo ${origin} ha sido copiado con éxito en ${destination}.`
  });
};
// copyFile('LICENSE', 'LICENSE2', { overwrite: true });
export default copyFile;
