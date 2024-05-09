import { stringifySearchParams } from "./stringifySearchParams";

export const setSearchParams = (entry: Record<string, any>) => {
    const href = `${window.location.pathname}?` + stringifySearchParams(entry);
    console.log(href)
    history.replaceState({
        ...history.state,
        as: href,
        new: href
    }, "", href);

    window.dispatchEvent(new Event('setSearchParams'));
}
