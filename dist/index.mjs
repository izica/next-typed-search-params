/*!
 * next-typed-search-params v1.0.9
 * (c) undefined
 * Released under the MIT License.
 */

import queryString from 'query-string';
import { useSearchParams as useSearchParams$1 } from 'next/navigation';
import { useMemo, useState, useEffect } from 'react';
import { z } from 'zod';

var Settings = /** @class */ (function () {
    function Settings() {
        this.arrayFormat = "bracket";
        this.arrayFormatSeparator = ",";
    }
    return Settings;
}());
var settings = new Settings();

function configure(options) {
    if (options["arrayFormat"]) {
        settings.arrayFormat = options["arrayFormat"];
    }
    if (options["arrayFormatSeparator"]) {
        settings.arrayFormatSeparator = options["arrayFormatSeparator"];
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var stringifySearchParams = function (searchParams) {
    return queryString.stringify(searchParams, {
        arrayFormat: settings.arrayFormat,
        arrayFormatSeparator: ',',
        encode: false,
        skipNull: true,
        skipEmptyString: true,
    });
};

var setSearchParams = function (entry) {
    var href = "".concat(window.location.pathname, "?") + stringifySearchParams(entry);
    history.replaceState(__assign(__assign({}, history.state), { as: href, new: href }), "", href);
    window.dispatchEvent(new Event('setSearchParams'));
};

var parseValue = function (value, schema) {
    if (schema === undefined) {
        return undefined;
    }
    var _a = schema.safeParse(value), success = _a.success, data = _a.data;
    if (success) {
        return data;
    }
    return undefined;
};

var parseSearchParams = function (schema, searchParamsString) {
    var parsedSearchParams = queryString.parse(decodeURIComponent(searchParamsString), {
        arrayFormat: settings.arrayFormat,
    });
    var result = {};
    for (var key in schema) {
        result[key] = parseValue(parsedSearchParams[key], schema[key] || undefined);
    }
    return result;
};

var useSearchParams = function (config) {
    var schema = useMemo(function () { return z.object(config(z)); }, []);
    var entry = useMemo(function () { return config(z); }, []);
    var searchParams = useSearchParams$1();
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
    return [data, setSearchParams];
};

export { configure, setSearchParams, stringifySearchParams, useSearchParams };
//# sourceMappingURL=index.mjs.map
