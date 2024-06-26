import { configure } from './configure';
declare const _default: {
    useSearchParams: <T extends Record<string, import("zod").ZodType>>(config: (zod: typeof import("zod/lib/external")) => T) => import("zod").TypeOf<import("zod").ZodObject<T, "strip", import("zod").ZodTypeAny, { [k in keyof import("zod").objectUtil.addQuestionMarks<import("zod").baseObjectOutputType<T>, any>]: import("zod").objectUtil.addQuestionMarks<import("zod").baseObjectOutputType<T>, any>[k]; }, { [k_1 in keyof import("zod").baseObjectInputType<T>]: import("zod").baseObjectInputType<T>[k_1]; }>>;
    stringifySearchParams: (searchParams: Record<string, any>) => string;
    setSearchParams: (entry: Record<string, any>) => void;
    configure: typeof configure;
};
export default _default;
//# sourceMappingURL=index.d.ts.map