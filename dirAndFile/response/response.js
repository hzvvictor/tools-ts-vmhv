"use strict";
exports.__esModule = true;
/**
 * Crea un objeto con un mensaje y un error opcional.
 * @param mensaje El mensaje a incluir en el objeto.
 * @param error Un error opcional a incluir en el objeto.
 * @returns Un objeto con el mensaje y el error opcional.
 */
function response(_a) {
    var mensaje = _a.mensaje, err = _a.error;
    return err ? { mensaje: mensaje, error: new Error("".concat(err)) }
        : { mensaje: mensaje };
}
exports["default"] = response;
