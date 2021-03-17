import { StoreName, ProjectType, MusicStoreName, Role } from '../types';

export default {
  developer: {
    name: 'Cameron Kunzelman',
    url: 'http://heylookatmygames.com/',
  },
  name: 'Epanalepsis',
  publisher: {
    name: 'Mastertronic Group',
    url: 'https://en.wikipedia.org/wiki/Mastertronic_Group#Mastertronic_Games',
  },
  roles: [Role['music']],
  type: ProjectType['game'],
  releaseDate: new Date('May 21, 2015'),
  musicStores: [
    {
      name: MusicStoreName['bandcamp'],
      url: 'https://audiosprite.bandcamp.com/album/epanalepsis',
    },
    {
      name: MusicStoreName['steam'],
      url: 'https://store.steampowered.com/app/372520/Epanalepsis__Soundtrack/',
    },
  ],
  stores: [
    {
      name: StoreName['steam'],
      url: 'https://store.steampowered.com/app/333690/Epanalepsis/',
    },
  ],
  pressQuotes: [
    {
      quote:
        'Kudos to the audio, which evoked memories of my favourite era of music.',
      author: 'John Walker',
      outlet: 'RockPaperShotgun',
      url: 'https://www.rockpapershotgun.com/2015/05/21/epanalepsis-review/',
    },
    {
      quote: 'John Fio’s neat melodies add character...',
      author: 'Adam Koper',
      outlet: 'Nouse',
      url: 'https://nouse.co.uk/2015/05/30/game-review-epanalepsis/',
    },
    {
      quote:
        'There is a great diversity in the musical selections with some very catchy melodies and cool atmosphere.',
      author: 'Chris Bowie',
      outlet: 'Mouse N Joypad',
      url: 'https://mousenjoypad.com/epanalepsis-review-mouse-n-joypad/',
    },
    {
      quote:
        'Slow, haunting and quite unsettling at times. It’s got a nice melancholy feel to it...',
      author: 'Joe Keeley',
      outlet: 'Adventure Gamers',
      url: 'http://www.adventuregamers.com/articles/view/28780',
    },
    {
      quote:
        'Does a good job of making you feel like everything is normal but that there is still something amiss.',
      author: 'Jorge Sobrino',
      outlet: 'IndiEvaluation',
      url: 'http://martyra2j.blogspot.com/2015/07/epanalepsis.html',
    },
    {
      quote:
        'The melancholy sounding score helps to enforce the bleak outlook of each character’s life.',
      author: 'Scotch Rat',
      outlet: 'Readers Gambit',
      url: 'http://www.readersgambit.com/epanalepsis-reveiw/',
    },
    {
      quote:
        'Of special note for the game is the score. It is the most engaging aspect of the game.',
      author: 'Lou Sytsma',
      outlet: 'Canadian Online Gaming Network',
      url: 'http://canadianonlinegamers.com/review/epanalepsis-review/',
    },
    {
      quote: 'Fascinating atmosphere',
      author: 'Dario Oropallo',
      outlet: 'The Shelter',
      url: 'http://theshelternetwork.com/epanalepsis/',
    },
    {
      quote:
        'This effect between melancholy and anxious is powered by the excellent soundtrack that accompanies Epanalepsis, composed by John Fio, and the sound of the game is excellent. If you can immerse yourself enough in its history, the music will make the immersion is complete and you feel lost in the game, to the point emotionally connect with the three stories, feeling part of them and identifying yourself in one way or another.',
      author: 'Ricardo Fernandez',
      outlet: 'gamerstyle',
      url: 'http://gamerstyle.com.mx/2015/06/03/resena-epanalepsis/',
    },
    {
      quote: 'Quite good.',
      author: 'Bryan Cebulski',
      outlet: 'TechRaptor',
      url:
        'https://techraptor.net/gaming/review/epanalepsis-review-player-unfriendly-narrative',
    },
    {
      quote: 'The music is superb.',
      author: 'Chris',
      outlet: 'Graal',
      url:
        'http://www.graal.fr/2015/06/01/test-epanalepsis-la-version-pour-steam/',
    },
    {
      quote:
        'Arguably the best aspect of the game, it’s surprisingly varied and is a great tone setter no matter which time period or environment you happen to be exploring at the time.',
      author: 'Daniel Vaughan',
      outlet: 'GamersFTW',
      url: 'http://www.gamersftw.co.uk/epanalepsis-review/',
    },
    {
      quote:
        'Masterfully done, evoking the feel from every epoch the game touches.',
      author: 'Pablo Krasnokuki',
      outlet: 'Guns and Pixels',
      url: 'https://gunsandpixels.com/2015/08/review-epanalepsis/',
    },
    {
      quote:
        'Quirky, beautiful, and sometimes haunting… the first time I loaded up the game, the bells in the opening track sent chills down my spine.',
      author: 'Alana Hagues',
      outlet: 'RPGFan',
      url: 'http://www.rpgfan.com/reviews/Epanalepsis/index.html',
    },
    {
      quote: 'Cool music.',
      author: 'Tom Woolford',
      outlet: 'Go Play That!',
      url: 'http://www.goplaythat.com/article/goplaythese-tornadoes',
    },
    // {
    //   quote: "The music is very good.",
    //   author: "Cara Ellison",
    //   // outlet: "",
    //   url: "https://twitter.com/caraellison/status/603780896974594048",
    // },
    {
      quote: 'The music elevates the game...',
      author: 'Chris Jepsen',
      outlet: 'Dark Station',
      url: 'https://www.darkstation.com/reviews/epanalepsis/',
    },
  ],
};
