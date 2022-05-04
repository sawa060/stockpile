import React from 'react';

interface SafeHydrateProps {
  children: JSX.Element | JSX.Element[];
}
const SafeHydrate = ({children}: SafeHydrateProps) => <>{children}</>;

// eslint-disable-next-line import/no-default-export
export default SafeHydrate;
