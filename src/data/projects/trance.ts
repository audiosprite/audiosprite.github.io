import { ProjectType, Role, Genre, StoreName } from '../../types';

export default {
  developer: {
    name: 'Greyson Borscheid',
  },
  genrePool: [[Genre['minimalism']]],
  name: 'Trance',
  type: ProjectType['shortfilm'],
  releaseDate: new Date('May 17, 2022'),
  roles: [Role['music']],
  stores: [
    {
      name: StoreName['instagram'],
      url: 'https://www.instagram.com/tv/CdrFV5CFAF4/',
    },
  ],
};
