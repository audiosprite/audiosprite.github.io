import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './Link.scss';

type LinkProps = {
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
  to,
}) => {
  const Component = to ? ReactRouterLink : href ? 'a' : 'div';
  return (
    // @ts-ignore
    <Component
      className={`Link ${className} ${
        hideUnderline ? 'hideUnderline' : ''
      }`.trim()}
      {...(Component === ReactRouterLink ? { to } : {})}
      {...(Component === 'a' ? { href, target: '__blank' } : {})}
    >
      {children}
    </Component>
  );
};

export default Link;
