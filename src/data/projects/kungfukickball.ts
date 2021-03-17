import { StoreName, ProjectType, MusicStoreName, Role, Genre } from '../types';

export default {
  developer: {
    name: 'Whalefood Games',
    url: 'http://www.whalefoodgames.com/',
  },
  genrePool: [
    [Genre['afrobeat'], Genre['bigband'], Genre['eleki'], Genre['grunge']],
    [Genre['bigband'], Genre['funk'], Genre['orchestral']],
    [Genre['wonky'], Genre['spiritual'], Genre['jazz'], Genre['bigband']],
    [Genre['ambient'], Genre['orchestral']],
    [Genre['disco'], Genre['metal'], Genre['orchestral']],
    [Genre['library'], Genre['funk'], Genre['bigband']],
    [Genre['disco'], Genre['rock'], Genre['house'], Genre['orchestral']],
    [Genre['orchestral']],
    [Genre['metal'], Genre['orchestral'], Genre['disco'], Genre['doom']],
  ],
  name: 'KungFu Kickball',
  publisher: {
    name: 'Blowfish Studios',
    url: 'https://www.blowfishstudios.com/',
  },
  type: ProjectType['game'],
  releaseDate: new Date(),
  roles: [Role['music']],
  selectTracks: [],
  musicStores: [
    {
      name: MusicStoreName['bandcamp'],
      url: 'https://audiosprite.bandcamp.com/album/kungfu-kickball',
    },
  ],
  stores: [
    {
      name: StoreName['steam'],
      url: 'https://store.steampowered.com/app/1004620/KungFu_Kickball/',
    },
    {
      name: StoreName['switch'],
    },
    {
      name: StoreName['ps4'],
    },
    {
      name: StoreName['xboxone'],
    },
  ],
  url: 'https://www.blowfishstudios.com/game/kfk',
};
