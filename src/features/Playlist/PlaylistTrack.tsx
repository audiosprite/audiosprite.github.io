import * as React from 'react';
import {
  PlaylistTrack as PlaylistTrackType,
  usePlaylist,
} from '../../hooks/usePlaylist';
import { Audio } from '../../components';

type PlaylistTrackProps = PlaylistTrackType;

const PlaylistTrack = ({
  artworkUrl,
  duration,
  genre,
  permalinkUrl,
  playlistIndex,
  title,
}: PlaylistTrackProps) => {
  const {
    currentIndex,
    currentTime,
    isPlaying,
    onPlayPause,
    onSeek,
  } = usePlaylist();

  const handlePlayPause = () => {
    onPlayPause(playlistIndex);
  };

  const trackIsPlaying = isPlaying && currentIndex === playlistIndex;

  const handleSeek = (timestamp: number) => {
    onSeek(playlistIndex, timestamp);
  };

  return (
    <Audio
      artworkUrl={artworkUrl}
      duration={duration}
      genre={genre}
      isPlaying={trackIsPlaying}
      permalinkUrl={permalinkUrl}
      onPause={handlePlayPause}
      onPlay={handlePlayPause}
      onSeek={handleSeek}
      time={trackIsPlaying ? currentTime : 0}
      title={title}
    />
  );
};

export default PlaylistTrack;
