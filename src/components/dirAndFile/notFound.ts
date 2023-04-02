import response from "./response/response";
const notFound = (path: string) => response({
  mensaje: `No se encontro ${path}`,
  error: 'El archivo o directorio no existe o no se posee permisos para su acceso.'
});

export default notFound
