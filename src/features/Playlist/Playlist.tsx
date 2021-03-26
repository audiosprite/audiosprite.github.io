import * as React from 'react';
import { usePlaylist } from '../../hooks/usePlaylist';
import PlaylistTrack from './PlaylistTrack';

const Playlist = () => {
  const { tracks = [] } = usePlaylist();
  return (
    <div>
      {tracks.map((track) => (
        <PlaylistTrack key={track.streamUrl} {...track} />
      ))}
    </div>
  );
};

export default Playlist;
