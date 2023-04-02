/**
 * Verifica si un archivo o directorio existe y tiene los permisos necesarios.
 * @param path La ruta del archivo o directorio a verificar.
 * @param mode El modo de acceso que se desea comprobar (por defecto es F_OK).
 * @returns Verdadero si el archivo o directorio existe y tiene los permisos necesarios, falso en caso contrario.
 */
declare const check: (path: string, mode?: number) => boolean;
export default check;
