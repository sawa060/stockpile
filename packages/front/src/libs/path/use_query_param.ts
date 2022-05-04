import {useRouter} from 'next/router';

import {RouteMap} from './route_map';

/**
 * get value from url query string
 * @example
 * const {} = useQueryParams<'productIndex'>()
 */
export function useQueryParams<K extends keyof RouteMap>(): {
  [Key in keyof RouteMap[K]['queryParams']]: string | undefined;
} {
  // next の default の型とは合わないので上書きする
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useRouter().query as any;
}
