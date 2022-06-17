import {
  ProjectType,
  Role,
  Genre,
  StoreName,
  MusicStoreName,
} from '../../types';

export default {
  developer: {
    name: 'Andrew Simon Thomas LLC',
    url: 'https://andrewsimonthomas.work/',
  },
  genrePool: [[Genre['metal']]],
  musicStores: [
    {
      name: MusicStoreName['bandcamp'],
      url:
        'https://audiosprite.bandcamp.com/album/shillelagh-original-game-soundtrack',
    },
  ],
  name: 'Shillelagh',
  releaseDate: new Date('November 10, 2021'),
  type: ProjectType['game'],
  roles: [Role['music']],
  stores: [
    {
      name: StoreName['steam'],
      url: 'https://store.steampowered.com/app/1590180/Shillelagh/',
    },
  ],
  url: 'https://andrewsimonthomas.work/shillelagh',
};
