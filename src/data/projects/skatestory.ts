import { MusicStoreName, ProjectType, Role, StoreName } from '../../types';

export default {
  developer: {
    name: 'bysameng',
    url: 'http://www.skatestorygame.com/',
  },
  musicStores: [
    {
      name: MusicStoreName['bandcamp'],
      url: 'https://audiosprite.bandcamp.com/album/skate-story-vol-2',
    },
  ],
  name: 'Skate Story',
  publisher: {
    name: 'Devolver Digital',
    url: 'https://www.devolverdigital.com/',
  },
  releaseDate: new Date('December 8, 2025'),
  roles: [Role.music],
  stores: [
    {
      name: StoreName['steam'],
      url: 'https://store.steampowered.com/app/1263240/Skate_Story/',
    },
  ],
  type: ProjectType.game,
  url: 'http://www.skatestorygame.com/',
};
