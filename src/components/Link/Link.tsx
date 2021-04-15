import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Amplitude } from '../../amplitude/amplitude';
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
  const onClick = () => {
    if (href) Amplitude.logEvent('navigateExternal', { href });
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
