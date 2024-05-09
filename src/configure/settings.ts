import type { ArrayFormatType } from "../types/ArrayFormatType";

class Settings {
    arrayFormat: ArrayFormatType = "bracket";
    arrayFormatSeparator: string = ",";
}

const settings = new Settings();

export { settings as Settings }
