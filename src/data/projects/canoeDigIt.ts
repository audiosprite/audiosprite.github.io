import { ProjectType, Role, Genre, StoreName } from '../../types';

export default {
  developer: {
    name: 'Samuel Dunning',
  },
  genrePool: [[Genre['orchestral'], Genre['funk']]],
  name: 'Canoe Dig It',
  releaseDate: new Date('Jan 2, 2025'),
  type: ProjectType['featureFilm'],
  roles: [Role['music']],
  //   stores: [
  //     {
  //       name: StoreName['vimeo'],
  //       url: 'https://vimeo.com/798022866',
  //     },
  //   ],
  url: 'https://www.samuelfddunning.com/canoe-dig-it',
};
