import { StoreName, ProjectType, Role } from '../../types';

export default {
  developer: {
    name: 'Alex Krokus',
    url: 'https://www.alexkrokus.com/',
  },
  genrePool: [],
  name: 'I Want to Fuck That Gorilla',
  type: ProjectType['shortfilm'],
  releaseDate: new Date('Jan 15, 2024'),
  roles: [Role['music']],
  selectTracks: [],
  stores: [
    {
      name: StoreName['youtube'],
      url: 'https://www.youtube.com/watch?v=9_lDFmc0ns8',
    },
  ],
};
