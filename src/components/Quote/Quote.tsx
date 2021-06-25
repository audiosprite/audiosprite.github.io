import * as React from 'react';
import './Quote.scss';

type QuoteProps = {
  author?: string;
  children?: React.ReactNode;
};

export const Quote = ({ author, children }: QuoteProps) => {
  return (
    <div className="Quote">
      <div className="Quote--QuotationMark Left">&ldquo;</div>
      <p>{children}</p>
      {author && <div className="Quote--Author">{`– ${author}`}</div>}
      <div className="Quote--QuotationMark Right">&rdquo;</div>
    </div>
  );
};
