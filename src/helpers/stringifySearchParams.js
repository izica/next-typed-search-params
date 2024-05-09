import queryString from "query-string";
import { Settings } from "../configure/settings";
export var stringifySearchParams = function (searchParams) {
    return queryString.stringify(searchParams, {
        arrayFormat: Settings.arrayFormat,
        arrayFormatSeparator: ',',
        encode: false,
        skipNull: true,
        skipEmptyString: true,
    });
};
