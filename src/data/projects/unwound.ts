import { ProjectType, Role, StoreName } from '../../types';

export default {
  developer: {
    name: 'Wirescribe Games',
    url: 'https://www.wirescribe.games/',
  },
  name: 'Unwound',
  roles: [Role.music],
  stores: [
    {
      name: StoreName['steam'],
      url: 'https://store.steampowered.com/app/2269360/Unwound/',
    },
  ],
  type: ProjectType.game,
  url: 'https://www.wirescribe.games/unwound.html',
};
