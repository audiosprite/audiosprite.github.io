import * as React from 'react';
import {
  Link as ReactRouterLink,
  LinkProps as RRLinkProps,
} from 'react-router-dom';
import './Link.scss';

type RouterLinkProps = {
  to: string;
  href?: never;
  className?: string;
  hideUnderline?: boolean;
  onClick?: (e: any) => void;
  children: React.ReactNode;
};

type AnchorLinkProps = {
  href?: string;
  to?: never;
  className?: string;
  hideUnderline?: boolean;
  onClick?: (e: any) => void;
  children: React.ReactNode;
};

type DivProps = {
  to?: never;
  href?: never;
  className?: string;
  hideUnderline?: boolean;
  onClick?: (e: any) => void;
  children: React.ReactNode;
};

type LinkProps = RouterLinkProps | AnchorLinkProps | DivProps;

const Link: React.FC<LinkProps> = ({
  className = '',
  children,
  hideUnderline,
  href,
  onClick: handleClick,
  to,
}) => {
  const onClick = (e: any) => {
    if (handleClick) handleClick(e);
  };

  if (to) {
    return (
      <ReactRouterLink
        to={to}
        className={`Link ${className} ${
          hideUnderline ? 'hideUnderline' : ''
        }`.trim()}
        onClick={onClick}
      >
        {children}
      </ReactRouterLink>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`Link ${className} ${
          hideUnderline ? 'hideUnderline' : ''
        }`.trim()}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      className={`Link ${className} ${
        hideUnderline ? 'hideUnderline' : ''
      }`.trim()}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Link;
