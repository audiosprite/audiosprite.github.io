import * as React from 'react';
import {
  Link as ReactRouterLink,
  LinkProps as RRLinkProps,
} from 'react-router-dom';
import { Amplitude } from '../../amplitude/amplitude';
import './Link.scss';

type LinkProps = Omit<RRLinkProps, 'to'> & {
  className?: string;
  hideUnderline?: boolean;
  href?: string;
  to?: string;
};

const Link: React.FC<LinkProps> = ({
  className = '',
  children,
  hideUnderline,
  href,
  onClick: handleClick,
  to,
}) => {
  const Component = to ? ReactRouterLink : href ? 'a' : 'div';
  const onClick = (e: any) => {
    if (href) Amplitude.logEvent('navigateExternal', { href });
    if (handleClick) handleClick(e);
  };
  return (
    <Component
      className={`Link ${className} ${
        hideUnderline ? 'hideUnderline' : ''
      }`.trim()}
      {...(Component === ReactRouterLink ? { to } : {})}
      {...(Component === 'a' ? { href, target: '__blank' } : {})}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Link;
