import { FC } from 'react';
import { Link, useMatch } from 'react-router-dom';

import { ActiveLinkProps } from './types';

export const ActiveLink: FC<ActiveLinkProps> = ({ children, to, ...props }) => {
  const match = useMatch(to);

  const matchPath = (path?: string): boolean => {
    const paths: { [key: string]: boolean } = {
      '/books/all': true,
      '/terms': true,
      '/contract': true,
    };

    if (path !== undefined) {
      return paths[path] || false;
    }

    return false;
  };

  return (
    <Link
      to={to}
      style={{
        color: match ? 'var(--accept-color)' : '',
        borderBottom: matchPath(match?.pathname) && typeof children === 'string' ? '1rem solid' : '',
      }}
      {...props}
    >
      {children}
    </Link>
  );
};
