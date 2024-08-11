import { ResourceNotFoundError } from '../errors';
import * as Types from './poke-api.types';
import { BASE_URL, ResponseStatus } from './constants/api';
import { Response as GotResponse } from 'got-cjs';

type Keys = Types.TypeMapKeys;

export class PokeApi<T extends Keys> implements Types.PokeApiProps<T> {
  private endpoint = '';
  private urlParam = '';
  private hasPagination = true;
  private statusCode = 0;

  constructor(
    endpoint: T,
    readonly config?: Types.PokeApiConfig,
  ) {
    this.config = config;
    this.endpoint = endpoint;
    this.urlParam = '';
  }

  async get(idOrName: Types.GetParams<T>): Promise<Types.TypeMap[T]> {
    const result = await this.fetchResource(
      `${this.getResourceURL({ param: idOrName })}`,
    );
    this.validateStatus(result.status);

    return this.parseResponse(result);
  }

  async getById(id: number): Promise<Types.TypeMap[T]> {
    const result = await this.fetchResource(
      `${this.getResourceURL({ param: id })}`,
    );
    this.validateStatus(result.status);

    return this.parseResponse(result);
  }

  async getByName(name: string): Types.GetByNameReturn<T> {
    const result = await this.fetchResource(
      `${this.getResourceURL({
        param: name,
      })}`,
    );
    this.validateStatus(result.status);

    return this.parseResponse(result);
  }

  async getAll(params: Types.GetAllParams<T>): Types.GetAllReturn<T> {
    const result = await this.fetchResource(this.getResourceURL(params));
    this.validateStatus(result.status);

    if (this.hasPagination) {
      const raw = await this.parseResponse(result);
      return raw.results;
    }

    return this.parseResponse(result);
  }

  async count(): Types.CountReturn<T> {
    const result = await this.fetchResource(this.getResourceURL());
    this.validateStatus(result.status);

    const raw = await this.parseResponse(result);
    return raw.count;
  }

  async paginate(params?: Partial<Types.QueryParams>): Types.PaginateReturn<T> {
    const result = await this.fetchResource(this.getResourceURL(params));
    this.validateStatus(result.status);

    return this.parseResponse(result);
  }

  private getResourceURL(
    params: Partial<Types.EndpointParams> | number | string | void,
  ) {
    if (this.endpoint === 'pokemon-location-area') {
      this.endpoint = 'pokemon';
      this.urlParam = '/encounters';
      this.hasPagination = false;
    }

    let url = '';
    if (typeof params === 'string' || typeof params === 'number') {
      url = `${BASE_URL}${this.endpoint}/${params}${this.urlParam}`;
    } else {
      if (params && params.param !== undefined) {
        url = `${BASE_URL}${this.endpoint}/${params.param}${this.urlParam}`;
      } else {
        const queryParams = new URLSearchParams();
        if (params?.offset) {
          queryParams.append('offset', String(params.offset));
        }
        if (params?.limit) {
          queryParams.append('limit', String(params.limit));
        }

        url = `${BASE_URL}${this.endpoint}${queryParams.size > 0 ? '?' + queryParams.toString() : ''}${this.urlParam}`;
      }
    }
    this.logger(`[GET] ${url}`);

    return url;
  }

  private validateStatus(statusCode: number) {
    this.logger(`[STATUS] ${this.statusCode ?? 'UNKNOWN'}`);

    if (this.statusCode === ResponseStatus.NOT_FOUND) {
      throw new ResourceNotFoundError();
    }
  }

  private async fetchResource(url: string): Promise<Response> {
    if (this.config?.interceptor) {
      const r = await this.config.interceptor.request(url, 'GET');
      // console.log('@Request', r.statusCode);
      const key = this.config.interceptor.statusKey ?? 'statusCode';
      this.statusCode =
        r![key as keyof unknown] ?? (r as unknown as Response).status ?? -1;
      return r as unknown as Response;
    }
    const r = await fetch(url);
    this.statusCode = r.status;

    return r;
  }

  private async parseResponse(result: unknown) {
    if (this.config?.interceptor) {
      return this.config.interceptor.response(result);
    }
    return (result as Response).json();
  }

  private logger(message: string) {
    if (this.config?.debug) {
      console.log(message);
    }
  }
}

export const pokeapi = <T extends Types.TypeMapKeys>(
  endpoint: T,
  config?: Types.PokeApiConfig,
): PokeApi<T> => {
  return new PokeApi(endpoint, config);
};
