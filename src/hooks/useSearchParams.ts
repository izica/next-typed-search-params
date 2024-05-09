import { z } from "zod";
import { useSearchParams as useSearchParamsNext } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { parseSearchParams } from "../helpers/parseSearchParams";

export const useSearchParams = <T extends Record<string, z.ZodType>, >(config: (zod: typeof z) => T) => {
    const schema = useMemo(() => z.object(config(z)), []);
    const entry = useMemo(() => config(z), []);

    const searchParams = useSearchParamsNext();

    const [data, setData] = useState(
        parseSearchParams<z.infer<typeof schema>>(entry, searchParams.toString())
    );

    useEffect(() => {
        setData(parseSearchParams<z.infer<typeof schema>>(entry, searchParams.toString()));
    }, [searchParams, schema, entry]);

    useEffect(() => {
        const handler = () => {
            setData(parseSearchParams<z.infer<typeof schema>>(entry, window.location.search.substring(1)));
        }
        window.addEventListener('setSearchParams', handler);
        return () => window.removeEventListener('setSearchParams', handler);
    }, [entry]);

    return data as z.infer<typeof schema>;
}
