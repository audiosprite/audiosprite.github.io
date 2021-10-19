import * as React from 'react';
import { maxTempo, minTempo } from './useTempoCalculator';

type DisplayNodePropsType = { i: number; tempo: number };
export const DisplayNode = ({ i, tempo }: DisplayNodePropsType) => {
  const getDistance = (fn: (num: number) => number) => {
    const val = 100 * (fn(tempo - minTempo) / fn(maxTempo - minTempo));
    return isFinite(val) ? val : 0;
  };
  const distance = getDistance(Math.log2);
  console.log(distance);
  return (
    <div
      className="DisplayNode"
      style={{
        // background: 'white',
        // color: 'white',
        left: `${distance}%`,
        bottom: `${distance}%`,
        transition: '75ms ease',
      }}
    >
      <div className="DisplayNode--Inner">
        <div
          className="DisplayNode--Text"
          style={{
            background: 'white',
            ...(i % 2 ? { left: 0, top: 0 } : { right: 0, bottom: 0 }),
          }}
        >
          {tempo}
        </div>
      </div>
    </div>
  );
};
