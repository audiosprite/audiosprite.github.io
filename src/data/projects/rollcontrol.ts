import { StoreName, ProjectType, Role, Genre } from '../../types';

export default {
  developer: {
    name: 'Andrew Simon Thomas LLC',
    url: 'https://andrewsimonthomas.work/',
  },
  genrePool: [[Genre['hawaiian']]],
  name: 'Roll Control',
  type: ProjectType['game'],
  releaseDate: new Date('May 18, 2020'),
  roles: [Role['music']],
  stores: [
    {
      name: StoreName['steam'],
      url: 'https://store.steampowered.com/app/1290920/Roll_Control/',
    },
  ],
};
