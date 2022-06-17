import { ProjectType, Role, Genre } from '../../types';

export default {
  developer: {
    name: 'Lillian DeLecuona',
  },
  genrePool: [[Genre['country'], Genre['orchestral']]],
  name: 'Riptide',
  releaseDate: new Date('May 7, 2022'),
  type: ProjectType['shortfilm'],
  roles: [Role['music']],
};
