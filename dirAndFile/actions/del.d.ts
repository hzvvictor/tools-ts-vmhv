import { Response } from "../response/response";
/**
 * Elimina un archivo o un directorio.
 * @param path La ruta del archivo o directorio a eliminar.
 * @returns Un objeto con el mensaje y el error opcional.
 */
declare const del: (path: string) => Response;
export default del;
