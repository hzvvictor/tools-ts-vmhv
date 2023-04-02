export type Response = {
    mensaje: string;
    error?: Error;
};
type resParams = {
    mensaje: string;
    error?: string;
};
/**
 * Crea un objeto con un mensaje y un error opcional.
 * @param mensaje El mensaje a incluir en el objeto.
 * @param error Un error opcional a incluir en el objeto.
 * @returns Un objeto con el mensaje y el error opcional.
 */
export default function response({ mensaje, error: err }: resParams): Response;
export {};
