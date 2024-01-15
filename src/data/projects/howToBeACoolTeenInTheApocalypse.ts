import { ProjectType, Role, Genre, StoreName, Project } from '../../types';

export default {
  developer: {
    name: 'Cam MacConnell',
    url: 'https://cammacconnell.com/',
  },
  genrePool: [[Genre['punk'], Genre['rock']]],
  name: 'How To Be A Cool Teen In The Apocalypse',
  type: ProjectType['shortfilm'],
  roles: [Role['music']],
  stores: [
    {
      name: StoreName['youtube'],
      // temp trailer link
      url: 'https://youtu.be/asSUYNkLigs?si=734oLiyInrdebxNj',
    },
  ],
};
