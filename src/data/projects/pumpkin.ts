// https://www.stitcher.com/show/pumpkin

import { ProjectType, Role, StoreName } from '../../types';

export default {
  developer: {
    name: 'Adam Schatz',
    url: 'http://landladyland.com/',
  },
  name: 'Pumpkin',
  publisher: { name: 'Stitcher', url: 'https://www.stitcher.com/' },
  releaseDate: new Date('Oct 26, 2020'),
  roles: [Role['sfx']],
  stores: [
    {
      name: StoreName['itunes'],
      url: 'https://www.stitcher.com/podcast/earwolf-premium/pumpkin',
    },
  ],
  type: ProjectType['podcast'],
  url: 'https://www.stitcher.com/show/pumpkin',
};
