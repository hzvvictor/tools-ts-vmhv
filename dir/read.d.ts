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
declare const read: ({ dirPath, recursive }: ReadDirParams) => ReadDirResponse;
export default read;
