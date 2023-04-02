import { Response } from "../response/response";
/**
 * Mueve un archivo o un directorio a una nueva ubicación.
 * @param pathCurrent La ruta del archivo o directorio a mover.
 * @param newPath La nueva ubicación del archivo o directorio.
 * @returns Un objeto con el mensaje y el error opcional.
 */
declare const move: (pathCurrent: string, newPath: string) => Response;
export default move;
