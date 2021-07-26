import * as React from 'react';
import { simplifyFraction } from './simplifyFraction';
import { useTempoCalculator } from './useTempoCalculator';
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
      <table>
        <thead>
          <tr>
            <th>Base Tempo</th>
            <th>Seed</th>
            {tempoSet.map((_, i) => (
              <th key={i} />
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                max="300"
                min="0"
                onChange={onChangeBaseTempo}
                type="number"
                value={baseTempo}
              />
            </td>
            <td>
              <input
                max="99"
                min="3"
                onChange={onChangeMultiplier}
                type="number"
                value={multiplier}
              />
            </td>
            {tempoSet.map((tempo, i) => (
              <td key={i}>{tempo}</td>
            ))}
          </tr>
          <tr>
            <td>♩ =</td>
            {/* <td /> */}
            {tempoSet.map((_, i) => (
              <td key={i} />
            ))}
            <td>Set tempo to this</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
