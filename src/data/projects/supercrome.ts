import { StoreName, ProjectType, Role } from '../../types';

export default {
  developer: {
    name: 'Stumphead Games',
    url: 'http://supercro.me/',
  },
  earlyAccess: true,
  name: 'Super Crome',
  // pressQuotes: [
  //   {
  //     quote: "Pleasing sounds...",
  //     author: "Rob Christopher",
  //     outlet: "The Cambridge Geek",
  //     url: "https://www.thecambridgegeek.com/posts/2019/03/20190324-a.php",
  //   },
  // ],
  type: ProjectType['game'],
  roles: [Role['music'], Role['sfx']],
  stores: [
    {
      name: StoreName['steam'],
      url:
        'https://store.steampowered.com/app/984450/Super_Crome_Bullet_Purgatory/',
    },
  ],
  url: 'http://supercro.me/',
};
