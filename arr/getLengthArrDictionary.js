"use strict";
exports.__esModule = true;
var getLengthArrDictionary = function (items) {
    if (items === void 0) { items = []; }
    var dictionary = {};
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var _item = items_1[_i];
        var item = _item.toString().length.toString();
        if (item in dictionary) {
            dictionary[item]++;
        }
        else {
            dictionary[item] = 1;
        }
    }
    return dictionary;
};
exports["default"] = getLengthArrDictionary;
