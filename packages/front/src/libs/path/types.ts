type RelativePath<T> = T extends `/${infer U}` ? U : never;
type Resources<T> = T extends `${infer U}/${infer S}` ? U | Resources<S> : T;
type DynamicParams<T> = T extends `:${infer U}` ? U : never;

type UrlParamFields<T> = DynamicParams<Resources<RelativePath<T>>>;

type UrlParam<T> = UrlParamFields<T> extends never
  ? undefined
  : {[key in UrlParamFields<T>]: string | number};

export type PathParams<Path> = UrlParam<Path>;

export type Option = {
  /**
   * 指定のquery parameterを維持しつつoverrideする
   */
  overrideQueryParameter?: boolean;
};

/**
 * route type
 */
export interface Route<
  Path extends string,
  QueryParams extends Record<string, number | string | undefined | null> | undefined = undefined,
> {
  path: Path;
  queryParams: Partial<QueryParams>;
}
