import { ProjectType, Role, StoreName } from '../../types';

export default {
  developer: {
    name: 'bysameng',
    url: 'http://www.skatestorygame.com/',
  },
  name: 'Skate Story',
  publisher: {
    name: 'Devolver Digital',
    url: 'https://www.devolverdigital.com/',
  },
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
