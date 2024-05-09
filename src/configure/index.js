import { Settings } from "./settings";
export function configure(options) {
    if (options["arrayFormat"]) {
        Settings.arrayFormat = options["arrayFormat"];
    }
    if (options["arrayFormatSeparator"]) {
        Settings.arrayFormatSeparator = options["arrayFormatSeparator"];
    }
}
