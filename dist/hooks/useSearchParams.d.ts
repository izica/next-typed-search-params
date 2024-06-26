import { z } from "zod";
export declare const useSearchParams: <T extends Record<string, z.ZodType>>(config: (zod: typeof z) => T) => ({ [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>[k]; } | ((entry: Record<string, any>) => void))[];
//# sourceMappingURL=useSearchParams.d.ts.map