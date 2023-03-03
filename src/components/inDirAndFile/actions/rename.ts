import { renameSync } from 'fs';
import check from '../permissions/check';
import notFound from '../notFound';
import response, { Response } from '../response/response';

/**
 * Renombra un archivo o un directorio.
 * @param pathCurrent La ruta del archivo o directorio a renombrar.
 * @param newName El nuevo nombre que se le dará al archivo o directorio.
 * @returns Un objeto con el mensaje y el error opcional.
 */
const rename = (pathCurrent: string, newName: string): Response => {
  if (!check(pathCurrent)) {
    return notFound(pathCurrent);
  }

  const newPath = `${pathCurrent.split('/').slice(0, -1).join('/')}/${newName}`;

  renameSync(pathCurrent, newPath);
  return response({
    mensaje: `El archivo o directorio ha sido renombrado a ${newName} con éxito.`
  });
}

export default rename;