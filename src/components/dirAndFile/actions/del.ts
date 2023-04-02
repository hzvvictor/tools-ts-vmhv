import check from "../permissions/check";
import notFound from "../notFound";
import response, { Response } from "../response/response";
import { rmSync } from 'fs';

/**
 * Elimina un archivo o un directorio.
 * @param path La ruta del archivo o directorio a eliminar.
 * @returns Un objeto con el mensaje y el error opcional.
 */
const del = (path: string): Response => {
  if (!check(path)) {
    return notFound(path)
  }

  rmSync(path, { recursive: true });
  return response({
    mensaje: `El archivo o directorio ${path} ha sido eliminado con éxito.`
  });
}
export default del