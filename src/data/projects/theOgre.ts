import { ProjectType, Role, Genre } from '../../types';

export default {
  developer: {
    name: 'Barnegat Studios',
  },
  genrePool: [[Genre.electronic]],
  name: 'The Ogre',
  releaseDate: new Date('Feb 2, 2025'),
  type: ProjectType['featureFilm'],
  roles: [Role['music']],
};
