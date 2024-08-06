---
sidebar_position: 2
---

# PokeApi class


## Parameters

- endpoint
- configuration


## Configuration

- debug
- interceptor

### Logging
prints all the fetch get endpoint
prints all the returned status

## Extending
- `[key: string]: any`

```typescript
export interface PokeApiConfig {
  /**
   * Description placeholder
   * @date 4/2/2024 - 7:05:50 PM
   *
   * @type {Model.?boolean}
   */
  debug?: boolean;
  interceptor?: {
    request: (url: string, method: string) => unknown,
    response: (response: unknown) => Response,
  };
  /**
   * Description placeholder
   * @date 4/2/2024 - 7:05:50 PM
   */
  [key: string]: unknown;
}
```

### Axios

```bash npm2yarn
npm install axios axios-cache-interceptor
```

```typescript
import Axios from 'axios';
import { CacheAxiosResponse, setupCache } from 'axios-cache-interceptor';
import {PokeApi} from "./poke-api";
import {PokeApiProps, TypeMapKeys} from "./poke-api.types";

const instance = Axios.create();
const axios = setupCache(instance);

export class CustomPokeApi<T extends TypeMapKeys> extends PokeApi<T> implements PokeApiProps<T> {
  constructor(endpoint: T) {
    super(endpoint);
    return new PokeApi(endpoint, {
      // Here you extend interceptor with the package of your choice
      interceptor: {
        request: (url, method) => {
          return axios.get(url);
        },
        response: (resp: CacheAxiosResponse) => {
          return resp.data;
        }
      }
    });
  }
}
```
