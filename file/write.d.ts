import { Response } from "../inDirAndFile/response/response";
type WriteOption = 'create' | 'append' | 'overwrite';
/**
 * Crea, añade o sobreescribe contenido de un archivo.
 * @param path La ruta del archivo.
 * @param content El contenido a escribir en el archivo.
 * @param option La opción de escritura (create, append o overwrite).
 * @returns Un objeto con el mensaje y el error opcional.
 */
declare const write: (path: string, content: string, option: WriteOption) => Response;
export default write;
