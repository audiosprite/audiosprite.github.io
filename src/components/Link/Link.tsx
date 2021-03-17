import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './Link.scss';

type LinkProps = { className?: string } & (
  | { href: string; to?: never }
  | { href?: never; to: string }
);

const Link: React.FC<LinkProps> = ({ className = '', children, href, to }) => {
  const Component = to ? ReactRouterLink : 'a';
  return (
    // @ts-ignore
    <Component
      className={`Link ${className}`}
      {...(Component === ReactRouterLink ? { to } : {})}
      {...(Component === 'a' ? { href, target: '_blank' } : {})}
    >
      {children}
    </Component>
  );
};

export default Link;
