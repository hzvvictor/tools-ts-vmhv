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
export default function getStats(path: string): StatsInfo | null;
export {};
