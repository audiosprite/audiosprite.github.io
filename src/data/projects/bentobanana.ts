import {
  StoreName,
  ProjectType,
  //   MusicStoreName,
  Role,
  //   Genre,
} from '../../types';

export default {
  developer: {
    name: 'Ari Grabb',
  },
  // genrePool: [],
  name: 'Bento Banana',
  type: ProjectType['shortfilm'],
  releaseDate: new Date('May 7, 2019'),
  roles: [Role['music']],
  selectTracks: [],
  stores: [
    {
      name: StoreName['youtube'],
      url: 'https://www.youtube.com/watch?v=pjWiyz6s7yA',
    },
  ],
};
