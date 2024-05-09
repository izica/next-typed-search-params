import { z } from "zod";
import { useSearchParams as useSearchParamsNext } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { parseSearchParams } from "../helpers/parseSearchParams";
export var useSearchParams = function (config) {
    var schema = useMemo(function () { return z.object(config(z)); }, []);
    var entry = useMemo(function () { return config(z); }, []);
    var searchParams = useSearchParamsNext();
    var _a = useState(parseSearchParams(entry, searchParams.toString())), data = _a[0], setData = _a[1];
    useEffect(function () {
        setData(parseSearchParams(entry, searchParams.toString()));
    }, [searchParams, schema, entry]);
    useEffect(function () {
        var handler = function () {
            setData(parseSearchParams(entry, window.location.search.substring(1)));
        };
        window.addEventListener('setSearchParams', handler);
        return function () { return window.removeEventListener('setSearchParams', handler); };
    }, [entry]);
    return data;
};
