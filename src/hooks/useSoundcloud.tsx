import * as React from 'react';

export const SoundcloudContext = React.createContext({
  activeIndex: 0,
  playing: false,
  setActiveIndex: (i: number) => {},
  soundCloudAudio: {
    pause: () => {},
    play: ({ playlistIndex }: { playlistIndex: number }) => {},
    _playlist: { tracks: [] },
  },
});
