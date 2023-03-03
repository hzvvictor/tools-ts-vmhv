import { accessSync, statSync } from 'fs';

/**
 * Interfaz para representar la información de los stats de un archivo o directorio.
 */
interface StatsInfo {
  isFile: boolean;
  isDirectory: boolean;
  size: number;
  createdTime: Date;
  modifiedTime: Date;
}

/**
 * Devuelve la información de los stats de un archivo o directorio.
 * @param path La ruta del archivo o directorio.
 * @returns Un objeto con la información de los stats.
 */
export default function getStats(path: string): StatsInfo | null {
  try {
    const stats = statSync(path);
    const createdTime = new Date(stats.birthtimeMs);
    const modifiedTime = new Date(stats.mtimeMs);
    return {
      isFile: stats.isFile(),
      isDirectory: stats.isDirectory(),
      size: stats.size,
      createdTime,
      modifiedTime,
    };
  } catch (error) {
    return null;
  }
}
