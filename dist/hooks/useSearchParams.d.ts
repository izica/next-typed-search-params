import { z } from "zod";
import { setSearchParams } from "../helpers/setSearchParams";
export declare const useSearchParams: <T extends Record<string, z.ZodType>>(config: (zod: typeof z) => T) => [z.infer<z.ZodObject<T, "strip", z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<T>]: z.baseObjectInputType<T>[k_1]; }>>, typeof setSearchParams];
//# sourceMappingURL=useSearchParams.d.ts.map