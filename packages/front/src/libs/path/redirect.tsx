import {useRouter} from 'next/router';
import {useEffect} from 'react';

type RedirectProps = {
  to: string;
};

export const Redirect = ({to}: RedirectProps) => {
  const {push} = useRouter();

  useEffect(() => {
    push(to);
  }, [to, push]);
  return null;
};
