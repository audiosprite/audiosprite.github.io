import { StoreName, ProjectType, Role, Genre } from '../../types';

export default {
  developer: {
    name: 'Orc Punk',
    url: 'https://www.orcpunk.com/',
  },
  genrePool: [[Genre['downtempo']]],
  name: 'Into the Dark: Narakan',
  type: ProjectType['game'],
  releaseDate: new Date('Nov 8, 2018'),
  roles: [Role['music']],
  stores: [
    {
      name: StoreName['ios'],
      url: 'https://apps.apple.com/us/app/into-the-dark-narakan/id1413039006',
    },
  ],
  url: 'https://www.orcpunk.com/games/into-the-dark-narakan',
};
