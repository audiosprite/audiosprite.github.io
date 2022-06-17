import React, { ChangeEvent, useEffect, useState } from 'react';
import { Checkbox, Input } from '../../../components';
import { useLocalStorage } from '../../../utils';
import { useSeedFinder } from './useSeedFinder';

export const SeedFinder = () => {
  const { value } = useLocalStorage('authToken');
  const [authToken, setAuthToken] = useState(value || '');

  useEffect(() => {
    setAuthToken(value || '');
  }, [value]);

  const { error, loading, onSubmit, players } = useSeedFinder({});

  console.log(players);

  const handleChangeAuthToken = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthToken(e.target.value);
  };

  return (
    <div>
      <Input
        label="Auth Token"
        onChange={handleChangeAuthToken}
        name="authToken"
        // type="password"
        value={authToken}
      />
      <Checkbox />
      <button disabled={loading || !authToken} onClick={onSubmit}>
        Search
      </button>
      {players?.map(({ name, seedNum }) => (
        <div key={name}>{`${seedNum}: ${name}`}</div>
      ))}
      {error && <div>{error}</div>}
    </div>
  );
};
