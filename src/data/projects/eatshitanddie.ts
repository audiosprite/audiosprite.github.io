import { StoreName, ProjectType, Role, Genre } from '../../types';

export default {
  developer: {
    name: `Ben O'Hene`,
  },
  genrePool: [Genre['noise']],
  name: 'Eat Shit & Die',
  type: ProjectType['shortfilm'],
  releaseDate: new Date('February 18, 2019'),
  roles: [Role['music']],
  selectTracks: [],
  stores: [
    {
      name: StoreName['instagram'],
      url: 'https://www.instagram.com/p/BuCXNCqFRlV/',
    },
  ],
};
