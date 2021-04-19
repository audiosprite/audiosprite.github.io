import { StoreName, ProjectType, Role, Genre } from '../../types';

export default {
  developer: {
    name: 'Jonas Mumm',
    url: 'https://jonasmumm.itch.io/',
  },
  genrePool: [[Genre['chiptune']]],
  name: 'Ace Tennis 64',
  type: ProjectType['game'],
  releaseDate: new Date('Apr 16, 2016'),
  roles: [Role['sfx']],
  stores: [
    {
      name: StoreName['itch'],
      url: 'https://jonasmumm.itch.io/ace-tennis',
    },
  ],
};
