import { readdirSync, lstatSync } from 'fs'
import { join } from 'path'
import check from '../inDirAndFile/permissions/check';

type ReadDirParams = {
  dirPath: string;
  recursive?: boolean;
};

type ReadDirResponse = {
  files: string[];
  error?: Error;
};

/**
 * Lee el contenido de un directorio.
 * @param dirPath La ruta del directorio a leer.
 * @param recursive Si es verdadero, la función leerá el contenido del directorio de forma recursiva (opcional).
 * @returns Un objeto con los archivos encontrados en el directorio y un error opcional.
 */
const read = ({ dirPath, recursive = false }: ReadDirParams): ReadDirResponse => {
  const response: ReadDirResponse = {
    files: [],
  };

  try {
    if (!check(dirPath)) {
      response.error = new Error('El archivo o directorio no existe o no se posee permisos para su acceso.');
      return response;
    }

    const files = readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = join(dirPath, file);
      const isDirectory = lstatSync(filePath).isDirectory();

      if (isDirectory && recursive) {
        const recursiveFiles = read({ dirPath: filePath, recursive });
        response.files.push(...recursiveFiles.files);
      } else {
        response.files.push(filePath);
      }
    });
  } catch (error) {
    response.error = error;
  }

  return response;
}
export default read