import * as React from 'react';
import { usePlaylist } from '../../hooks/usePlaylist';

const Playlist = () => {
  const { tracks } = usePlaylist();
  return <div />;
};

export default Playlist;
