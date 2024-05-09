import { z } from "zod";
import queryString from "query-string";

import { parseValue } from "./parseValue";
import { Settings } from "../configure/settings";

export const parseSearchParams = <T, >(schema: Record<string, z.ZodType>, searchParamsString: string): T => {
    const parsedSearchParams = queryString.parse(decodeURIComponent(searchParamsString), {
        arrayFormat: Settings.arrayFormat,
    });
    const result: Record<string, any> = {};

    for (let key in schema) {
        result[key] = parseValue(parsedSearchParams[key], schema[key] || undefined);
    }

    return result as T;
}
