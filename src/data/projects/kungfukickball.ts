import {
  StoreName,
  ProjectType,
  MusicStoreName,
  Role,
  Genre,
} from '../../types';

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
  pressQuotes: [
    {
      // quote:
      //   'From the moment you open the main menu, you’ll feel like you’re in a somber training session like in The Karate Kid or Ip Man, and the tracks continue bangers from there. The Temple arena theme is very fast-paced, with some saxophone and jazz vibes, and even the character select screen has its own theme, filled with funky bass guitar and twanky electric guitar riffs. This is a really fun soundtrack to listen to, and while it certainly has vibes from kungfu or martial arts movies, it also brings a new style and flavor into the mix for an awesome experience.',
      // quote: 'From the moment you open the main menu, you’ll feel like you’re in a somber training session like in The Karate Kid or Ip Man, and the tracks continue bangers from there',
      quote:
        'From the moment you open the main menu, you’ll feel like you’re in a somber training session like in The Karate Kid or Ip Man, and the tracks continue bangers from there... This is a really fun soundtrack to listen to, and while it certainly has vibes from kungfu or martial arts movies, it also brings a new style and flavor into the mix for an awesome experience.',
      author: 'Cody',
      outlet: 'IndieGamesPulse',
      url: 'https://www.youtube.com/watch?v=WsB-HXEER6M',
    },
  ],
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
