import fs,{ accessSync, constants } from 'fs';
/**
 * Verifica si un archivo o directorio existe y tiene los permisos necesarios.
 * @param path La ruta del archivo o directorio a verificar.
 * @param mode El modo de acceso que se desea comprobar (por defecto es F_OK).
 * @returns Verdadero si el archivo o directorio existe y tiene los permisos necesarios, falso en caso contrario.
 */
const check=(path: string, mode: number = constants.F_OK): boolean =>{
  try {
    accessSync(path, mode);
    return true;
  } catch (error) {
    return false;
  }
}
export default check;