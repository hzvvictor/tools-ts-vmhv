"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var response_1 = __importDefault(require("./response/response"));
var notFound = function (path) { return (0, response_1["default"])({
    mensaje: "No se encontro ".concat(path),
    error: 'El archivo o directorio no existe o no se posee permisos para su acceso.'
}); };
exports["default"] = notFound;
