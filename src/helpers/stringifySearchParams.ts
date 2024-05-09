import queryString from "query-string";

import { Settings } from "../configure/settings";

export const stringifySearchParams = (searchParams: Record<string, any>): string => {
    return queryString.stringify(searchParams, {
        arrayFormat: Settings.arrayFormat,
        arrayFormatSeparator: ',',
        encode: false,
        skipNull: true,
        skipEmptyString: true,
    });
}
