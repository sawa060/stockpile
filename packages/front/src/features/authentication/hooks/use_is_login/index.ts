import {TokenStorage} from '@src/libs/token_storage';

export function useIsLogin() {
  const token = TokenStorage.getIdToken();

  const isLogin = !!token;

  return isLogin;
}
