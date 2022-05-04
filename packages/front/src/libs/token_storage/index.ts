import Cookies from 'js-cookie';

const ID_TOKEN_KEY = 'api_token';

/**
 * 認証のtokenの永続化
 */
export class TokenStorage {
  public static getIdToken(): string | undefined {
    return Cookies.get(ID_TOKEN_KEY);
  }

  public static setIdToken(idToken: string) {
    Cookies.set(ID_TOKEN_KEY, idToken);
  }

  public static clear() {
    Cookies.remove(ID_TOKEN_KEY);
  }
}
