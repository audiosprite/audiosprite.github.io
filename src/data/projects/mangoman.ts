import { StoreName, ProjectType, MusicStoreName, Role, Genre } from '../types';

export default {
  developer: {
    name: 'Joseph Gribbin',
    url: 'https://josephgribbin.itch.io/',
  },
  genrePool: [[Genre['chiptune']]],
  name: 'Mangoman',
  type: ProjectType['game'],
  releaseDate: new Date('Aug 2, 2016'),
  roles: [Role['music']],
  // selectTracks: [],
  // musicStores: [
  //   {
  //     name: MusicStoreName["bandcamp"],
  //     url: "https://audiosprite.bandcamp.com/album/kungfu-kickball",
  //   },
  // ],
  stores: [
    {
      name: StoreName['itch'],
      url: 'https://josephgribbin.itch.io/mangoman',
    },
  ],
  url: 'https://josephgribbin.itch.io/mangoman',
};
