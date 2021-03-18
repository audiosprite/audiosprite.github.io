import { StoreName, ProjectType, MusicStoreName, Role } from '../../types';

export default {
  developer: {
    name: 'Eclipse Game Labs',
  },
  name: 'Wholesome Slaughter',
  roles: [Role['music']],
  type: ProjectType['game'],
  releaseDate: new Date('Dec 10, 2020'),
  musicStores: [
    {
      name: MusicStoreName['bandcamp'],
      url:
        'https://audiosprite.bandcamp.com/album/wholesome-slaughter-original-game-soundtrack',
    },
  ],
  stores: [
    {
      name: StoreName['steam'],
      url: 'https://store.steampowered.com/app/1488640/Wholesome_Slaughter/',
    },
  ],
};
