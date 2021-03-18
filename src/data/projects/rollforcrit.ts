import {
  StoreName,
  ProjectType,
  //   MusicStoreName,
  Role,
  //   Genre,
} from '../../types';

export default {
  developer: {
    name: 'Roll for Crit, LLC',
    url: 'https://www.rollforcrit.com/',
  },
  // genrePool: [],
  name: 'Roll for Crit',
  type: ProjectType['letsplay'],
  releaseDate: new Date('2018'),
  roles: [Role['music']],
  selectTracks: [],
  stores: [
    {
      name: StoreName['youtube'],
      url: 'https://www.youtube.com/c/RollforCrit',
    },
  ],
  url: 'https://www.rollforcrit.com/',
};
