import { ProjectType, Role, Genre, StoreName } from '../../types';

export default {
  developer: {
    name: 'Lily Padula',
    url: 'https://www.lilypadula.com/',
  },
  genrePool: [[Genre['country'], Genre['orchestral']]],
  name: 'Partnering with Beavers to Adapt to Climate Change',
  publisher: {
    name: 'Natural Resources Defense Council',
    url: 'https://www.nrdc.org/',
  },
  releaseDate: new Date('Oct 13, 2023'),
  stores: [
    {
      name: StoreName['youtube'],
      url: 'https://www.youtube.com/watch?v=QQbg4QrVryI',
    },
  ],
  type: ProjectType['shortfilm'],
  roles: [Role['music']],
};
