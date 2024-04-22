import check from "../inDirAndFile/permissions/check";
import response, { Response } from "../inDirAndFile/response/response";
import notFound from "../inDirAndFile/notFound";
import { writeFileSync, appendFileSync } from 'fs';

type WriteOption = 'create' | 'append' | 'overwrite'

/**
 * Crea, añade o sobreescribe contenido de un archivo.
 * @param path La ruta del archivo.
 * @param content El contenido a escribir en el archivo.
 * @param option La opción de escritura (create, append o overwrite).
 * @returns Un objeto con el mensaje y el error opcional.
 */
const write = (path: string, content: string, option= 'overwrite' as WriteOption): Response => {
  const exist = check(path)
  if (!exist && option !== 'create') {
    return notFound(path);
  }

  switch (option) {
    case 'create':
      if (exist){
        return response({
          mensaje: 'Error',
          error: `El archivo ${path} ya existe.`
        });
      }
      writeFileSync(path, content);
      return response({
        mensaje: `El archivo ${path} ha sido creado con éxito.`
      });
    case 'append':
      appendFileSync(path, content);
      return response({
        mensaje: `El contenido ha sido añadido al archivo ${path} con éxito.`
      });
    case 'overwrite':
      writeFileSync(path, content, { flag: 'w' });
      return response({
        mensaje: `El archivo ${path} ha sido sobrescrito con éxito.`
      });
    default:
      return response({
        mensaje: 'Error',
        error: `La opción de escritura ${option} no es válida.`
      });
  }
}
export default write