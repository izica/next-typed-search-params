var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { stringifySearchParams } from "./stringifySearchParams";
export var setSearchParams = function (entry) {
    var href = "".concat(window.location.pathname, "?") + stringifySearchParams(entry);
    console.log(href);
    history.replaceState(__assign(__assign({}, history.state), { as: href, new: href }), "", href);
    window.dispatchEvent(new Event('setSearchParams'));
};
