/* eslint-disable import/no-extraneous-dependencies */
import {Split} from 'type-fest';

import {RouteMap} from './route_map';
import {Option, PathParams, Route} from './types';

const defaultOptionValue: Required<Pick<Option, 'overrideQueryParameter'>> = {
  overrideQueryParameter: false,
};

function getQueryParams(
  params: {[key: string]: number | string | undefined | null},
  option?: Pick<Option, 'overrideQueryParameter'>,
): '' | `?${string}` {
  const mergedOption = {...defaultOptionValue, ...option};
  const queryParams = new URLSearchParams(
    mergedOption.overrideQueryParameter ? window.location.search : undefined,
  );
  Object.entries(params).forEach(([key, val]) => {
    if (val === undefined || val === null) {
      queryParams.delete(key);
      return;
    }
    queryParams.set(key, val.toString());
  });
  const str = queryParams.toString();
  return str === '' ? '' : `?${str}`;
}

type JoinTuple<T> = T extends [infer Head, ...infer Rest]
  ? Head extends undefined
    ? ''
    : JoinTuple<Rest> extends ''
    ? `${Head extends `:${string}` ? string : Head & string}`
    : `${Head extends `:${string}` ? string : Head & string}/${JoinTuple<Rest>}`
  : '';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PathFnReturnType<R extends Route<string, any>> = R['path'] extends '/'
  ? '/'
  : R['queryParams'] extends undefined
  ? JoinTuple<Split<R['path'], '/'>>
  : JoinTuple<Split<R['path'], '/'>> | `${JoinTuple<Split<R['path'], '/'>>}?${string}`;

type PathFn<
  R extends Route<string, Record<string, number | string | undefined | null> | undefined>,
> = R['queryParams'] extends undefined
  ? PathParams<R['path']> extends undefined
    ? () => PathFnReturnType<R>
    : (params: PathParams<R['path']>) => PathFnReturnType<R>
  : (
      params: (PathParams<R['path']> extends undefined ? {} : PathParams<R['path']>) &
        (R['queryParams'] extends undefined ? {} : R['queryParams']),
      option?: Option,
    ) => PathFnReturnType<R>;

export function getSubdomain() {
  return window.location.hostname.split('.')[0];
}

export const Path: {[key in keyof RouteMap]: PathFn<RouteMap[key]>} = {
  root: () => '/',
  /**
   * ログイン
   */
  login: ({from}) => `/login${getQueryParams({from})}`,
  /**
   * home
   */
  home: () => '/home',
};
