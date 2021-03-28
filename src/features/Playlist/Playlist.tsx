import * as React from 'react';
import { usePlaylist } from '../../hooks/usePlaylist';
import PlaylistTrack from './PlaylistTrack';
import './Playlist.scss';

const Playlist = () => {
  const { currentIndex, tracks = [] } = usePlaylist();
  return (
    <div className="Playlist">
      {tracks.map((track) => (
        <PlaylistTrack
          key={track.streamUrl}
          {...track}
          isCurrentIndex={currentIndex === track.playlistIndex}
        />
      ))}
    </div>
  );
};

export default Playlist;
