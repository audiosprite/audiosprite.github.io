import * as React from 'react';
import { usePlaylist } from '../../hooks/usePlaylist';
import PlaylistTrack from './PlaylistTrack';
import './Playlist.scss';

const Playlist = () => {
  const { currentIndex, onEnded, tracks = [] } = usePlaylist();
  return (
    <div className="Playlist">
      {tracks.map((track) => (
        <PlaylistTrack
          key={track.streamUrl}
          {...track}
          isCurrentIndex={currentIndex === track.playlistIndex}
          onEnded={onEnded}
        />
      ))}
    </div>
  );
};

export default Playlist;
