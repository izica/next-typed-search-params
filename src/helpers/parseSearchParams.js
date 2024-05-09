import { z } from "zod";
import queryString from "query-string";
import { parseValue } from "./parseValue";
import { Settings } from "../configure/settings";
export var parseSearchParams = function (schema, searchParamsString) {
    var parsedSearchParams = queryString.parse(decodeURIComponent(searchParamsString), {
        arrayFormat: Settings.arrayFormat,
    });
    var result = {};
    for (var key in schema) {
        result[key] = parseValue(parsedSearchParams[key], schema[key] || undefined);
    }
    return result;
};
