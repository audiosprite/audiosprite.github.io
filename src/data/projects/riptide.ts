import { ProjectType, Role, Genre, StoreName } from '../../types';

export default {
  developer: {
    name: 'Lillian DeLecuona',
    url: 'https://www.lilliedelecuona.com/',
  },
  genrePool: [[Genre['country'], Genre['orchestral']]],
  name: 'Riptide',
  releaseDate: new Date('May 7, 2022'),
  type: ProjectType['shortfilm'],
  roles: [Role['music']],
  stores: [
    {
      name: StoreName['youtube'],
      url: 'https://www.youtube.com/watch?v=d5L7R14xuPw',
    },
  ],
};
