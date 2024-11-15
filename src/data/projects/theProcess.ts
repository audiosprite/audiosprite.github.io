import { StoreName, ProjectType, Role } from '../../types';

export default {
  developer: {
    name: 'Jude Brewer',
    url: 'https://www.judebrewer.com/',
  },
  name: 'The Process',
  type: ProjectType['podcast'],
  releaseDate: [new Date('Sept 15, 2023'), undefined],
  roles: [Role['music']],
  selectTracks: [],
  stores: [
    {
      name: StoreName['itunes'],
      url: 'https://podcasts.apple.com/us/podcast/the-process/id1479333981',
    },
  ],
  url: 'https://cooperatewiththeprocess.com/',
};
