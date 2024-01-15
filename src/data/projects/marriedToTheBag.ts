import { ProjectType, Role, Genre, StoreName } from '../../types';

export default {
  developer: {
    name: 'Zane Bhansali',
  },
  genrePool: [[Genre['minimalism'], Genre['ambient']]],
  name: 'Married to the Bag',
  releaseDate: new Date('Feb 11, 2023'),
  type: ProjectType['shortfilm'],
  roles: [Role['music']],
  stores: [
    {
      name: StoreName['vimeo'],
      url: 'https://vimeo.com/798022866',
    },
  ],
};
