import { copySync } from 'fs-extra'
import { response } from "../inDirAndFile";
import { Response } from "../inDirAndFile/response/response";
import check from "../inDirAndFile/permissions/check";

const copy = (origin: string, destination: string, { overwrite = false } = {}): Response => {
  if (check(origin)) {
    return response({
      mensaje: 'Error',
      error: 'El directorio de origen no existe.'
    });
  }
  copySync(origin, destination, { overwrite })
  return response({
    mensaje: `El directorio ${origin} ha sido copiado con éxito en ${destination}.`
  });
}
export default copy;