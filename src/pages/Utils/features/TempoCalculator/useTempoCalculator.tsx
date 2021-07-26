import { FormEvent, useMemo, useState } from 'react';

const maxTempo = 360;

type getTempoSetArgs = { baseTempo: number; multiplier?: number };
const getTempoSet = ({ baseTempo, multiplier = 1 }: getTempoSetArgs) => {
  if (baseTempo < 1 || baseTempo > maxTempo) {
    return [];
  }

  const numPowers = 7;
  const bins = Array.from(
    new Array(numPowers),
    (_, i) => i - Math.floor(numPowers / 2),
  ).map((p) => baseTempo * Math.pow(2, p));

  return [...bins, ...(multiplier === 1 ? [] : bins.map((n) => n * multiplier))]
    .filter((n) => n >= 30 && n <= 360)
    .sort((a, b) => a - b);
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
