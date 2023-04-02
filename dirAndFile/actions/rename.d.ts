import { Response } from '../response/response';
/**
 * Renombra un archivo o un directorio.
 * @param pathCurrent La ruta del archivo o directorio a renombrar.
 * @param newName El nuevo nombre que se le dará al archivo o directorio.
 * @returns Un objeto con el mensaje y el error opcional.
 */
declare const rename: (pathCurrent: string, newName: string) => Response;
export default rename;
