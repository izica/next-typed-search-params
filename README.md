# NextJS typed search params
Discover Next.js typesafe and shallow search params for your project.

## Features
* NextJS 13/14+ App router
* Typesafe, supports type hints
* Shallow routing support
* Stateful
* Supports customizable search string format, see: [query-string](https://www.npmjs.com/package/query-string#arrayformat)
  * `foo[]=1&foo[]=2&foo[]=3`
  * `foo[0]=1&foo[1]=2&foo[3]=3`
  * `foo=1,2,3`
  * `foo=1|2|3`
  * `foo[]=1|2|3&bar=fluffy&baz[]=4`
  * `foo=1&foo=2&foo=3`
  * etc

## What's inside
* [zod](https://www.npmjs.com/package/zod)
* [query-string](https://www.npmjs.com/package/query-string)

## Get started
### Installation
```bash
npm install next-typed-search-params
```
```bash
yarn add next-typed-search-params
```

### Initializing
At top `client` component:

```typescript
'use client'
import { configure } from "next-typed-search-params";

configure({ arrayFormat: "bracket-separator" })
```

#### Options
* [arrayFormat](https://www.npmjs.com/package/query-string#arrayformat) - optional, "bracket" by default
* [arrayFormatSeparator](https://www.npmjs.com/package/query-string#arrayformatseparator) - optional, "," by default

### Usage
```typescript jsx
import { useSearchParams } from "next-typed-search-params";

export const Component = ({}: PropsType) => {
    const [searchParams, setSearchParams] = useSearchParams((z) => ({
        productId: z.coerce.number().array(),
        value: z.coerce.number().default(0),
        date: z.coerce.string().optional()
    }));

    const handleClick = () => {
        setSearchParams({
            ...searchParams,
            value: searchParams.value + 1
        })
    }

    return (<button onClick={handleClick}>click {searchParams.value}</button>);
};
```

#### Error handling
If the Zod parse fails, the search parameter will be set as undefined.
