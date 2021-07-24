import * as React from 'react';
import { FormEvent, useState } from 'react';

export const TempoCalculator = () => {
  const [baseTempo, setBaseTempo] = useState<string>('');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setBaseTempo((e?.target as HTMLInputElement).value || '');
  };

  return (
    <div>
      <input
        max="300"
        min="0"
        onChange={handleChange}
        type="number"
        value={baseTempo}
      />
    </div>
  );
};
