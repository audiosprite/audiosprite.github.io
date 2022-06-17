import React, { useState } from 'react';
import { useLocalStorage } from '../../../utils';

// authToken = 'ac45a054e09e3ae9bd2a9615b4edc3ab'

const requestUrl = 'https://api.start.gg/gql/alpha';

const getPayload = (phaseId = 1132834) => ({
  operationName: 'PhaseSeeds',
  query:
    'query PhaseSeeds($phaseId: ID!, $page: Int!, $perPage: Int!) {\n  phase(id:$phaseId) {\n    id\n    seeds(query: {\n      page: $page\n      perPage: $perPage\n    }){\n      pageInfo {\n        total\n        totalPages\n      }\n      nodes {\n        id\n        seedNum\n        entrant {\n          id\n          participants {\n            id\n            gamerTag\n          }\n        }\n      }\n    }\n  }\n}',
  variables: { phaseId, page: 1, perPage: 500 },
  page: 1,
  perPage: 500,
  phaseId,
});

type PlayerType = { name: string; seedNum: number };

const transformData: ({ data }: { data: unknown }) => PlayerType[] = ({
  data,
}) =>
  data?.phase?.seeds?.nodes
    .sort((a, b) => a.seedNum - b.seedNum)
    .map(({ entrant, seedNum }) => ({
      name: entrant.participants[0].gamerTag,
      seedNum,
    }));

export const useSeedFinder = ({
  authToken = 'ac45a054e09e3ae9bd2a9615b4edc3ab',
  phaseId = 1132834,
}) => {
  const { setLocalStorage } = useLocalStorage('authToken');

  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState<PlayerType[]>([]);
  const [error, setError] = useState('');

  const onSubmit = async () => {
    try {
      if (phaseId) {
        setLoading(true);
        setLocalStorage(authToken);
        const response: unknown = await fetch(requestUrl, {
          body: JSON.stringify(getPayload(phaseId)),
          headers: { authorization: `Bearer ${authToken}` },
          method: 'POST',
        }).then((res) => res.json());

        setPlayers(transformData(response as { data: unknown }));
        setLoading(false);
      }
    } catch (e: unknown) {
      setError(JSON.stringify(e));
    }
  };

  return { error, loading, onSubmit, players };
};
