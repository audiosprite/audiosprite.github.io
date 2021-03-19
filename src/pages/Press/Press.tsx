import * as React from 'react';
import projects from '../../data/projects';
import { PressQuote } from '../../types';
import { shuffle } from '../../utils/shuffle';
import PressQuotePane from './PressQuotePane';
import './Press.scss';

// @ts-ignore
const allPressQuotes: PressQuote[] = shuffle(
  // @ts-ignore
  projects.reduce(
    // @ts-ignore
    (acc, curr) => [
      ...acc,
      ...(curr.pressQuotes?.map((pressQuote) => ({
        projectName: curr.name,
        ...pressQuote,
      })) || []),
    ],
    [],
  ),
);

const Press = () => {
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
