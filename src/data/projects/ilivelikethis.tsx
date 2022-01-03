import { StoreName, ProjectType, Role } from '../../types';

export default {
  developer: {
    name: 'Alex Krokus',
    url: 'https://www.alexkrokus.com/',
  },
  genrePool: [],
  name: 'I Live Like This: Anthony DiPelicano',
  type: ProjectType['shortfilm'],
  releaseDate: new Date('Jan 15, 2021'),
  roles: [Role['music']],
  selectTracks: [],
  stores: [
    {
      name: StoreName['youtube'],
      url: 'https://www.youtube.com/watch?v=uV5sYqt2D30',
    },
  ],
};
