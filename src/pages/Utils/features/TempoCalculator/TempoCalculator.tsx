import * as React from 'react';
import { useTempoCalculator } from './useTempoCalculator';
import { DisplayNode } from './DisplayNode';
import './TempoCalculator.scss';

export const TempoCalculator = () => {
  const {
    baseTempo,
    multiplier,
    onChangeBaseTempo,
    onChangeMultiplier,
    tempoSet,
  } = useTempoCalculator();

  console.log(tempoSet);

  return (
    <div className="TempoCalculator">
      <div className="TempoCalculator--Inputs">
        <div>
          <div>Base tempo</div>
          <input
            max="300"
            min="0"
            onChange={onChangeBaseTempo}
            type="number"
            value={baseTempo}
          />
        </div>
        <div>
          <div>Seed</div>
          <input
            max="99"
            min="3"
            onChange={onChangeMultiplier}
            type="number"
            value={multiplier}
          />
        </div>
      </div>
      <div className="TempoCalculator--Display">
        {tempoSet.map((tempo, i) => (
          <DisplayNode key={i} i={i} tempo={tempo} />
        ))}
      </div>
      {/* <table>
        <tbody>
          <tr>
            {tempoSet.map((tempo, i) => (
              <td key={i}>{tempo}</td>
            ))}
          </tr>
          <tr>
            <td>♩ =</td>
            {tempoSet.map((_, i) => (
              <td key={i} />
            ))}
            <td>Set tempo to this</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};
