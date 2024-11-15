import { ProjectType, Role, Genre, StoreName } from '../../types';

export default {
  developer: {
    name: 'Cam MacConnell',
    url: 'https://cammacconnell.com/',
  },
  genrePool: [[Genre['punk'], Genre['rock']]],
  name: 'How To Be A Cool Teen In The Apocalypse',
  releaseDate: new Date('Jan 2, 2023'),
  type: ProjectType['shortfilm'],
  roles: [Role['music']],
  stores: [
    {
      name: StoreName['youtube'],
      // temp trailer link
      url: 'https://www.youtube.com/watch?v=LPVsA_u8ULU',
    },
  ],
};
