import * as React from 'react';

export const SoundcloudContext = React.createContext({
  activeIndex: 0,
  playing: false,
  playlist: {
    tracks: [],
  },
  setActiveIndex: (i: number) => {},
  soundCloudAudio: {
    audio: {
      currentTime: 0,
      duration: 0,
    },
    pause: () => {},
    play: ({ playlistIndex }: { playlistIndex?: number }) => {},
    _playlist: { tracks: [] },
  },
});
