import * as React from 'react';
import { Divider } from '../../components';
import './BlogPostFooter.scss';

type BlogPostHeaderProps = { children: React.ReactNode; subtitle?: string };
export const BlogPostHeader = ({ children, subtitle }: BlogPostHeaderProps) => (
  <div className="BlogPostHeader">
    <h2>{children}</h2>
    {subtitle && <h3>{subtitle}</h3>}
  </div>
);

export const BlogPostFooter = () => (
  <div className="BlogPostFooter">
    <Divider />
    <div className="BlogPostFooter--RowOne">
      <div />
      <div className="BlogPostFooter--Date">{new Date().toDateString()}</div>
    </div>
  </div>
);
