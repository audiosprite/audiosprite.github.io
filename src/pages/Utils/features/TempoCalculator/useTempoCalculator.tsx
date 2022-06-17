import { FormEvent, useMemo, useState } from 'react';

export const minTempo = 40;
export const maxTempo = 360;

type getTempoSetArgs = { baseTempo: number; multiplier?: number };
const getTempoSet = ({ baseTempo, multiplier = 1 }: getTempoSetArgs) => {
  if (baseTempo < minTempo || baseTempo > maxTempo) {
    return [];
  }

  const numPowers = 9;
  const bins = Array.from(
    new Array(numPowers),
    (_, i) => baseTempo * Math.pow(2, i - Math.floor(numPowers / 2)),
  );

  const pivotTempo = Math.max(
    ...[
      ...bins,
      ...(multiplier === 1 ? [] : bins.map((n) => n * multiplier)),
    ].filter((n) => n >= minTempo && n <= maxTempo),
  );

  const pivotTempi: number[] = [];
  for (let i = 1; (pivotTempo * 4) / i >= minTempo; i++) {
    const newTempo = (pivotTempo * 4) / i;
    if (
      newTempo === +newTempo.toFixed(3) &&
      newTempo <= maxTempo &&
      !pivotTempi.includes(newTempo)
    ) {
      pivotTempi.unshift((pivotTempo * 4) / i);
    }
  }

  return pivotTempi;
};

export const useTempoCalculator = () => {
  const [baseTempo, setBaseTempo] = useState<string>('120');
  const onChangeBaseTempo = (e: FormEvent<HTMLInputElement>) => {
    setBaseTempo((e?.target as HTMLInputElement).value || '');
  };

  const [multiplier, setMultiplier] = useState<string>('3');
  const onChangeMultiplier = (e: FormEvent<HTMLInputElement>) => {
    setMultiplier((e?.target as HTMLInputElement).value || '');
  };

  const tempoSet = useMemo(
    () => getTempoSet({ baseTempo: +baseTempo, multiplier: +multiplier }),
    [baseTempo, multiplier],
  );

  return {
    baseTempo,
    multiplier,
    onChangeBaseTempo,
    onChangeMultiplier,
    tempoSet,
    value: baseTempo,
  };
};
