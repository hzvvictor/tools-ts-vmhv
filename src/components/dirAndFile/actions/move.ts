import check from "../permissions/check";
import notFound from "../notFound";
import response, { Response } from "../response/response";
import { renameSync } from 'fs';
/**
 * Mueve un archivo o un directorio a una nueva ubicación.
 * @param pathCurrent La ruta del archivo o directorio a mover.
 * @param newPath La nueva ubicación del archivo o directorio.
 * @returns Un objeto con el mensaje y el error opcional.
 */
const move = (pathCurrent: string, newPath: string): Response => {
  if (!check(pathCurrent)) {
    return notFound(pathCurrent);
  }

  if (check(newPath)) {
    return response({
      mensaje: `Ya existe ${newPath} `,
      error: 'Ya existe un archivo o directorio con ese nombre.'
    });
  }

  renameSync(pathCurrent, newPath);
  return response({
    mensaje: `El archivo o directorio ha sido movido a ${newPath} con éxito.`
  });
}
export default move