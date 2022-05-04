import {Route} from './types';

export const officeIdUrlParam = ':officeId' as const;

/**
 * keyの命名ルール
 * - 一覧 → XxxIndex
 * - 詳細 → XxxSingle
 * Xxxはドメインの複数形
 *
 * react-routerのパラメータは`:fooBar`のcamelCaseにしてください
 */
export interface RouteMap {
  root: Route<'/'>;
  /**
   * ログイン
   */
  login: Route<'/login'>;
  /**
   * home
   */
  home: Route<'/home'>;
}
