import { StoreName, ProjectType, Role } from '../../types';

export default {
  developer: {
    name: 'Jude Brewer',
  },
  name: "it's getting late...",
  type: ProjectType.podcast,
  releaseDate: new Date('Dec 1, 2025'),
  roles: [Role.music],
  stores: [
    {
      name: StoreName.itunes,
      url: 'https://podcasts.apple.com/us/podcast/its-getting-late/id1794029220',
    },
  ],
};
