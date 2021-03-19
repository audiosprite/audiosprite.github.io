import * as React from 'react';
import projects from '../../data/projects';
import { PressQuote } from '../../types';
import PressQuotePane from './PressQuotePane';
import './Press.scss';

// @ts-ignore
const allPressQuotes: PressQuote[] = projects.reduce(
  // @ts-ignore
  (acc, curr) => [
    ...acc,
    ...(curr.pressQuotes?.map((pressQuote) => ({
      projectName: curr.name,
      ...pressQuote,
    })) || []),
  ],
  [],
);

const Press = () => {
  console.log(allPressQuotes);
  return (
    <div className="Press">
      <div className="Press--TopSpacer" />
      <div className="PressQuotes">
        {allPressQuotes.map((pressquote) => (
          <PressQuotePane key={pressquote.quote} {...pressquote} />
        ))}
      </div>
      <div className="Press--BottomSpacer" />
    </div>
  );
};

export default Press;
