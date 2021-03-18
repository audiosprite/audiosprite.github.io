import { StoreName, ProjectType, Role, MusicStoreName } from '../../types';

export default {
  name: 'Zarvot',
  developer: {
    name: 'SnowHydra Games',
    url: 'http://snowhydra.com/',
  },
  trailer: 'https://www.youtube.com/watch?v=0hbHseelXHA',
  type: ProjectType['game'],
  releaseDate: new Date('October 18, 2018'),
  musicStores: [
    {
      name: MusicStoreName['bandcamp'],
      url: 'https://zarvot.bandcamp.com/',
    },
  ],
  roles: [Role['music'], Role['sfx']],
  stores: [
    {
      name: StoreName['switch'],
      url: 'https://www.nintendo.com/games/detail/zarvot-switch/',
    },
  ],
  pressQuotes: [
    {
      quote: 'This is a jam.',
      author: 'Austin Walker',
      outlet: 'Waypoint',
      url: 'https://www.twitch.tv/videos/324275712?t=06h17m26s',
    },
    {
      quote:
        'The game’s quirky, retro-sonic soundtrack is a real treat for the ears.',
      author: 'Chris MC',
      outlet: 'GameSpew',
      url: 'https://www.gamespew.com/2018/10/zarvot-review/',
    },
    {
      quote: 'The music is fantastic in any given circumstance...',
      author: 'Josh Shoup',
      outlet: 'GamePitt',
      url: 'http://www.gamepitt.co.uk/zarvot-nintendo-switch-review/',
    },
    {
      quote:
        'Great range of music that really suits the gameplay and atmosphere of each chapter.',
      author: 'Jordan Rudek',
      outlet: 'Nintendo World Report',
      url: 'https://www.youtube.com/watch?v=UhuGZ683-oc',
    },
    {
      quote: 'The music fits perfectly...',
      author: 'Flavio Russo',
      outlet: 'Nerdpool',
      url:
        'https://www.nerdpool.it/2018/10/18/zarvot-un-gioco-di-snowhydra-games-recensione/',
    },
    {
      quote: 'Great visual presentation and music.',
      author: 'Jes Taylor',
      outlet: 'Gaming Respawn',
      url: 'http://www.gamingrespawn.com/reviews/37795/zarvot-review/',
    },
    {
      quote: 'The soundtrack is wonderful...',
      author: 'Jace Glover',
      outlet: 'SwitchUp Gaming',
      url: 'https://youtu.be/aGmdwjIwjnY',
    },
    {
      quote: "The game's moody, ambient soundtrack is strong...",
      author: 'Evan Norris',
      outlet: 'VGChartz',
      url: 'http://www.vgchartz.com/article/393011/zarvot-ns/',
    },
    {
      quote:
        'I do not often start a review talking about the artistic aspects, but it is undeniable that immediately you are taken by a soundtrack of the highest level that mixes jazz with electronic sounds, ambient, hip-hop, funk and even rock, perfectly emphasizing the action onscreen...',
      author: 'Marco Disarò',
      outlet: 'Switch Italia',
      url: 'http://www.switchitalia.it/2018/10/22/zarvot/',
    },
    {
      quote: 'Stunning music...',
      author: 'Ethan Hunt',
      outlet: 'Switch Player',
      url: 'http://switchplayer.net/2018/12/03/zarvot-review/',
    },
  ],
};
