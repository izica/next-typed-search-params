import { z } from "zod";

export const parseValue = (value: any, schema: z.ZodType | undefined) => {
    if (schema === undefined) {
        return undefined;
    }
    const { success, data } = schema.safeParse(value);
    if (success) {
        return data
    }

    return undefined;
}
