import { StoreName, ProjectType, Role } from '../../types';

export default {
  developer: {
    name: 'Ranged Touch',
    url: 'https://rangedtouch.com/',
  },
  name: 'Sword Coast: Coast 2 Coast',
  type: ProjectType['podcast'],
  releaseDate: new Date('June 15, 2019'),
  roles: [Role['music']],
  selectTracks: [],
  stores: [
    {
      name: StoreName['itunes'],
      url:
        'https://podcasts.apple.com/us/podcast/sword-coast-coast-2-coast/id1469120484',
    },
  ],
};
