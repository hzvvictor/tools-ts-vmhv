// import * as fs from 'fs';
import { stat as _stat, constants } from 'fs';

import { promisify } from 'util';
/**
 * Verifica si el archivo o directorio en la ruta especificada existe y tiene permisos de lectura, escritura y ejecución.
 *
 * @param {string} path - La ruta del archivo o directorio a verificar.
 * @returns {Promise<{ exist: boolean, read: boolean, write: boolean, execute: boolean }>} - Un objeto que indica si el archivo o directorio existe y si tiene permisos de lectura, escritura y ejecución.
 * @throws {Error} - Se lanza un error si se produce algún problema al verificar los permisos del archivo o directorio.
 */

const verifyPermissions = async (path: string): Promise<{ exist: boolean, read: boolean, write: boolean, execute: boolean }> => {
  const stat = promisify(_stat);

  try {
    const stats = await stat(path);

    return {
      exist: true,
      read: (stats.mode & constants.S_IRUSR) !== 0,
      write: (stats.mode & constants.S_IWUSR) !== 0,
      execute: (stats.mode & constants.S_IXUSR) !== 0,
    };
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {
        exist: false,
        read: false,
        write: false,
        execute: false,
      };
    }
    throw error;
  }
};
export default verifyPermissions