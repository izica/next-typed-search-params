import { z } from "zod";
export var parseValue = function (value, schema) {
    if (value === undefined || schema === undefined) {
        return undefined;
    }
    var _a = schema.safeParse(value), success = _a.success, data = _a.data;
    if (success) {
        return data;
    }
    return undefined;
};
