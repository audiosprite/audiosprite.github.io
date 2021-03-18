import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './Link.scss';

type LinkProps = { className?: string; href?: string; to?: string };

const Link: React.FC<LinkProps> = ({ className = '', children, href, to }) => {
  const Component = to ? ReactRouterLink : href ? 'a' : 'div';
  return (
    // @ts-ignore
    <Component
      className={`Link ${className}`.trim()}
      {...(Component === ReactRouterLink ? { to } : {})}
      {...(Component === 'a' ? { href, target: '__blank' } : {})}
    >
      {children}
    </Component>
  );
};

export default Link;
