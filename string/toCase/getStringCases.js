"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var capitalize_1 = __importDefault(require("./capitalize"));
var toCamelAndSnakeCase_1 = __importDefault(require("./toCamelAndSnakeCase"));
var toPlural_1 = __importDefault(require("./toPlural"));
var toSingular_1 = __importDefault(require("./toSingular"));
var toSpaceCase_1 = __importDefault(require("./toSpaceCase"));
var toSpaceTitleCaseFromSnake_1 = __importDefault(require("./toSpaceTitleCaseFromSnake"));
var toTitleCaseFromSnake_1 = __importDefault(require("./toTitleCaseFromSnake"));
var getStringCasesPlural = function (string) {
    var _a = (0, toCamelAndSnakeCase_1["default"])((0, toPlural_1["default"])(string, true)), camelPlu = _a.camel, snakePlu = _a.snake;
    var spacePlural = (0, toSpaceCase_1["default"])(snakePlu);
    var variationsPlu = {
        camel: camelPlu,
        camelCap: (0, capitalize_1["default"])(camelPlu),
        snake: snakePlu,
        snakeCap: (0, capitalize_1["default"])(snakePlu),
        snakeTitle: (0, toTitleCaseFromSnake_1["default"])(snakePlu),
        space: spacePlural,
        spaceCap: (0, capitalize_1["default"])(spacePlural),
        spaceTitle: (0, toSpaceTitleCaseFromSnake_1["default"])(snakePlu)
    };
    return variationsPlu;
};
var getStringCasesSingular = function (string) {
    var _a = (0, toCamelAndSnakeCase_1["default"])((0, toSingular_1["default"])(string, true)), camelSin = _a.camel, snakeSin = _a.snake;
    var spaceSingular = (0, toSpaceCase_1["default"])(snakeSin);
    var variationsPlu = {
        camel: camelSin,
        camelCap: (0, capitalize_1["default"])(camelSin),
        snake: snakeSin,
        snakeCap: (0, capitalize_1["default"])(snakeSin),
        snakeTitle: (0, toTitleCaseFromSnake_1["default"])(snakeSin),
        space: spaceSingular,
        spaceCap: (0, capitalize_1["default"])(spaceSingular),
        spaceTitle: (0, toSpaceTitleCaseFromSnake_1["default"])(snakeSin)
    };
    return variationsPlu;
};
var getStringCases = function (string, out) {
    if (out === void 0) { out = 'ALL'; }
    switch (true) {
        case out === 'PLURAL':
            return {
                plural: getStringCasesPlural(string),
                singular: undefined
            };
        case out === 'SINGULAR':
            return {
                plural: undefined,
                singular: getStringCasesSingular(string)
            };
        default:
            return {
                plural: getStringCasesPlural(string),
                singular: getStringCasesSingular(string)
            };
    }
};
// console.log(getStringCases('USER NAMES', 'ALL'))
exports["default"] = getStringCases;
