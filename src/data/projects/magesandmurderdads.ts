import {
  StoreName,
  ProjectType,
  //   MusicStoreName,
  Role,
  //   Genre,
} from '../../types';

export default {
  developer: {
    name: 'Ranged Touch',
    url: 'https://rangedtouch.com/',
  },
  // genrePool: [],
  name: 'Mages and Murderdads',
  type: ProjectType['letsplay'],
  releaseDate: new Date('Mar 1, 2018'),
  roles: [Role['music']],
  selectTracks: [],
  stores: [
    {
      name: StoreName['youtube'],
      url:
        'https://www.youtube.com/playlist?list=PLVcfOocLDkUzbmK5SuMdQ5drxIX7BMteN',
    },
  ],
};
