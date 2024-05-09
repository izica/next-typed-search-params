import type { ArrayFormatType } from "../types/ArrayFormatType";
import { Settings } from "./settings";

export function configure(options: {
    arrayFormat?: ArrayFormatType,
    arrayFormatSeparator?: string
}) {
    if (options["arrayFormat"]) {
        Settings.arrayFormat = options["arrayFormat"];
    }

    if (options["arrayFormatSeparator"]) {
        Settings.arrayFormatSeparator = options["arrayFormatSeparator"];
    }
}
