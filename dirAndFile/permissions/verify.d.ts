/**
 * Verifica si el archivo o directorio en la ruta especificada existe y tiene permisos de lectura, escritura y ejecución.
 *
 * @param {string} path - La ruta del archivo o directorio a verificar.
 * @returns {Promise<{ exist: boolean, read: boolean, write: boolean, execute: boolean }>} - Un objeto que indica si el archivo o directorio existe y si tiene permisos de lectura, escritura y ejecución.
 * @throws {Error} - Se lanza un error si se produce algún problema al verificar los permisos del archivo o directorio.
 */
declare const verifyPermissions: (path: string) => Promise<{
    exist: boolean;
    read: boolean;
    write: boolean;
    execute: boolean;
}>;
export default verifyPermissions;
