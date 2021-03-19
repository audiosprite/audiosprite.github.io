import * as React from 'react';
import projects from '../../data/projects';
import { PressQuote } from '../../types';
import { shuffle } from '../../utils/shuffle';
import PressQuotePane from './PressQuotePane';
import { RebelFM } from './RebelFM';
import './Press.scss';

const outlets = ['Waypoint', 'RockPaperShotgun', 'RebelFM'];

// @ts-ignore
const sort = (a, b) => {
  const aOutlet = outlets.includes(a.outlet);
  const bOutlet = outlets.includes(b.outlet);
  if (aOutlet || bOutlet) {
    if (bOutlet) {
      if (aOutlet) return 0;
      return 1;
    }
    return -1;
  }
  return 0;
};

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
  // @ts-ignore
).sort(sort);

const Press = () => (
  <div className="Press">
    <div className="Press--Left">
      <div className="Press--TopSpacer" />
      <div className="PressQuotes">
        {allPressQuotes.map((pressquote) => (
          <PressQuotePane key={pressquote.quote} {...pressquote} />
        ))}
      </div>
      <div className="Press--BottomSpacer" />
    </div>
    <div className="Press--Right">
      <div className="Press--RightInner">
        <RebelFM />
      </div>
    </div>
  </div>
);

export default Press;
