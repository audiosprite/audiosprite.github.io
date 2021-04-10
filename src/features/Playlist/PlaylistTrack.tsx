import * as React from 'react';
import {
  PlaylistTrack as PlaylistTrackType,
  usePlaylist,
} from '../../hooks/usePlaylist';
import { Audio } from '../../components';

type PlaylistTrackProps = PlaylistTrackType;

const PlaylistTrack = (track: PlaylistTrackProps) => {
  const { audio, currentIndex, isPlaying, onPlayPause, onSeek } = usePlaylist();

  const handlePlayPause = () => {
    onPlayPause(track.playlistIndex);
  };

  const trackIsPlaying = isPlaying && currentIndex === track.playlistIndex;

  const handleSeek = (timestamp: number) => {
    onSeek(track.playlistIndex, timestamp);
  };

  return (
    <Audio
      artworkUrl={track.artworkUrl}
      duration={track.duration}
      genre={track.genre}
      isPlaying={trackIsPlaying}
      title={track.title}
      permalinkUrl={track.permalinkUrl}
      onPause={handlePlayPause}
      onPlay={handlePlayPause}
      onSeek={handleSeek}
      time={trackIsPlaying ? audio?.state.time || 0 : 0}
    />
  );
};

export default PlaylistTrack;
