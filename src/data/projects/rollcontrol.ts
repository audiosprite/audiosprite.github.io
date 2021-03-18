import {
  StoreName,
  ProjectType,
  MusicStoreName,
  Role,
  Genre,
} from '../../types';

export default {
  developer: {
    name: 'Andrew Simon Thomas LLC',
    // url: 'https://josephgribbin.itch.io/',
  },
  // genrePool: [[Genre['chiptune']]],
  name: 'Roll Control',
  type: ProjectType['game'],
  releaseDate: new Date('May 18, 2020'),
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
      name: StoreName['steam'],
      url: 'https://store.steampowered.com/app/1290920/Roll_Control/',
    },
  ],
};
