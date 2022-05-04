import {useRouter} from 'next/router';

import {RouteMap} from './route_map';
import {PathParams} from './types';

type UseParamReturnType<PathKey extends keyof RouteMap | undefined = undefined> =
  PathKey extends undefined
    ? {}
    : {[K in keyof PathParams<RouteMap[Exclude<PathKey, undefined>]['path']>]: string};

export function useParams<
  PathKey extends keyof RouteMap | undefined = undefined,
>(): UseParamReturnType<PathKey> {
  return useRouter().query as UseParamReturnType<PathKey>;
}
