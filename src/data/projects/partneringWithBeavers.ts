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
  //   releaseDate: new Date('May 7, 2022'),
  type: ProjectType['shortfilm'],
  roles: [Role['music']],
};
