import { mkdirSync } from 'fs'
import { response } from "../inDirAndFile";
import { Response } from "../inDirAndFile/response/response";
import check from "../inDirAndFile/permissions/check";
/**
 * Crea un directorio en la ruta especificada.
 * @param {string} path - La ruta donde se creará el directorio.
 * @returns {Response} - Un objeto que contiene un mensaje de éxito o error.
 * Si el directorio se crea correctamente, el objeto tendrá un mensaje de éxito.
 * De lo contrario, si la ruta ya existe, el objeto tendrá un mensaje de error.
 * @typedef {Object} Response - Un objeto que contiene un mensaje y un error opcional.
 * @property {string} mensaje - El mensaje que describe el resultado de la operación.
*/
const add = (path: string): Response => {
  if (check(path)) {
    return response({
      mensaje: 'Error',
      error: 'Ya existe un archivo o directorio con ese nombre.'
    });
  }
  mkdirSync(path, { recursive: true })
  return response({
    mensaje: `El directorio se ha sido creado con exito en ${path}.`
  });

}
export default add;