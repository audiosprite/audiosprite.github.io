import * as React from 'react';
import { Link } from '../../components';
import { PressQuote } from '../../types';
import './PressQuotePane.scss';

const PressQuotePane: React.FC<PressQuote> = ({
  projectName,
  quote,
  author,
  outlet,
  url,
}) => (
  <div className="PressQuotePane">
    <div className="PressQuotePane--Quote">{`"${quote}"`}</div>
    <div className="PressQuotePane--Right">
      <div className="PressQuotePane--AuthorWrapper">
        <div className="PressQuotePane--AuthorEmdash">{` — `}</div>
        <div className="PressQuotePane--Author">{`${author}, `}</div>
      </div>
      <Link className="PressQuotePane--Outlet" href={url}>
        {outlet}
      </Link>
      <div className="PressQuotePane--ProjectName">{projectName}</div>
    </div>
  </div>
);

export default PressQuotePane;
