import {usePolicyContext} from '@js/features/access_control/contexts/policy_context';
import {useGlobalOfficeConfigocalStorageRepository} from '@js/features/global_office_config/repositories/use_global_office_config_local_storage_repository';
import {TokenStorage} from '@js/libs/token_storage';

import {useAuthUserContext} from '../../contexts/authentication_user_context';

export function useIsLogin() {
  const token = TokenStorage.getIdToken();
  const refreshToken = TokenStorage.getRefreshToken();
  const policy = usePolicyContext();
  const authUser = useAuthUserContext();
  const {data: officeConfigLocalData} = useGlobalOfficeConfigocalStorageRepository();

  const isLogin = !!token && !!refreshToken && !!policy && !!authUser && !!officeConfigLocalData;

  return isLogin;
}
