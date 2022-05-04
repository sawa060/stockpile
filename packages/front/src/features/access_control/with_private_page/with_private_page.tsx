import {useIsLogin} from '@src/features/authentication/hooks/use_is_login';
import {Path} from '@src/libs/path';
import {NextComponentType, NextPage, NextPageContext} from 'next';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';

/**
 * Private Next.js Page HOC
 * @example
 * export default withPrivatePage(ShipmentSingle);
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withPrivatePage = <P extends Record<string, any> = {}>(
  WrappedComponent: NextComponentType<NextPageContext, {}, P>,
) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithPrivatePage: NextPage<P> = (props) => {
    const {replace} = useRouter();
    const isLogin = useIsLogin();

    useEffect(() => {
      if (!isLogin) {
        replace(Path.login());
      }
    }, [isLogin, replace]);

    if (!isLogin) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithPrivatePage.displayName = `withPrivatePage(${displayName})`;
  return ComponentWithPrivatePage;
};
