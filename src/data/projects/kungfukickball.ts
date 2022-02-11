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
      quote:
        'From the moment you open the main menu, you’ll feel like you’re in a somber training session like in The Karate Kid or Ip Man, and the tracks continue bangers from there... This is a really fun soundtrack to listen to, and while it certainly has vibes from kungfu or martial arts movies, it also brings a new style and flavor into the mix for an awesome experience.',
      author: 'Cody',
      outlet: 'IndieGamesPulse',
      url: 'https://www.youtube.com/watch?v=WsB-HXEER6M',
    },
    {
      quote:
        '...fantastic songs that really build the tension and feel like proper anthems of sorts that perfectly compliment the action happening on screen.',
      author: 'Jason Capp',
      outlet: 'NintendoLink',
      url:
        'https://nintendolink.com/2022/02/09/kungfu-kickball-switch-review-there-must-exist-a-fusion-of-mind-and-foot/',
    },
    {
      quote:
        '...the soundtrack is excellent throughout. Each arena has its own music which fits in with the theme and ensures the pulse-pounding action is complemented perfectly',
      author: 'Daniel Amoroso',
      outlet: 'Lords of Gaming',
      url:
        'https://lordsofgaming.net/2022/02/kung-fu-kickball-review-oriental-fun-just-for-kicks/',
    },
    {
      quote:
        'KungFu Kickball has a stellar soundtrack thanks to composer John Fio...',
      author: 'Terrance Pryor',
      outlet: 'MP3s and NPCs',
      url: 'https://mp3sandnpcs.com/home/review-kungfu-kickball-consoles-pc',
    },
    {
      /*
        Although we definitely found our favourites and our most challenging maps. I personally love the Desert as the soundtrack absolutely banging.

        Speaking of banging music, oh my goodness. John Fio did an amazing job with the soundtrack that doesn’t seem to get repetitive or annoying as some arcade-like games can be. With an Eastern vibe to match the aesthetic of the game, they’ve mixed in metal and at times some bass drops to really get you grooving while you are playing. Each map has a unique music track that compliments it beautifully. The addition of fighting game voice-overs created some excitement too. Getting a ‘team smackdown’ or a ‘double knockout’ really hyped up the vibe. I don’t usually comment on a game’s music, but this time it could not go unnoticed!
      */
      quote:
        'Speaking of banging music, oh my goodness. John Fio did an amazing job with the soundtrack... I don’t usually comment on a game’s music, but this time it could not go unnoticed!',
      author: 'MrsLlante',
      outlet: 'Checkpoint Gaming',
      url:
        'https://checkpointgaming.net/reviews/2022/02/kungfu-kickball-review-its-a-double-knockout/',
    },
    {
      // The music is also great, a nice mixture of rocking action music and specific theme songs for the different levels.
      quote: 'The music is also great...',
      author: 'Callum Davis',
      outlet: 'Keen Gamer',
      url:
        'https://www.keengamer.com/articles/reviews/pc-reviews/kungfu-kickball-review-with-bells-and-whistles-on-pc/',
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
