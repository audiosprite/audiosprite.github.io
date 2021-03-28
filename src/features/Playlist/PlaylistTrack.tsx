import * as React from 'react';
import {
  PlaylistTrack as PlaylistTrackType,
  usePlaylist,
} from '../../hooks/usePlaylist';
import useAudio from '../../hooks/useAudio';
import { Audio } from '../../components';

type PlaylistTrackProps = PlaylistTrackType & {
  isCurrentIndex: boolean;
};

const PlaylistTrack = ({ isCurrentIndex, ...track }: PlaylistTrackProps) => {
  const { onEnded, onSetIsPlaying, onSetCurrentIndex } = usePlaylist();

  const { element, state, controls } = useAudio({
    src: `${track.streamUrl}?client_id=9f32c400308da184e94e83dbbf3391c7`,
  });

  React.useEffect(() => {
    controls.setEndedCallback(onEnded);
  }, []);

  React.useEffect(() => {
    if (!isCurrentIndex && !state.paused) {
      controls.pause();
    }
    if (isCurrentIndex && state.paused) {
      controls.play();
    }
  }, [isCurrentIndex]);

  const handlePlay = () => {
    controls.play();
    // @ts-ignore
    if (!isCurrentIndex) onSetCurrentIndex(track.playlistIndex);
    // @ts-ignore
    onSetIsPlaying(true);
  };

  const handlePause = () => {
    controls.pause();
    // @ts-ignore
    onSetIsPlaying(false);
  };

  return (
    <>
      {element}
      <Audio
        artworkUrl={track.artworkUrl}
        duration={state.duration}
        genre={track.genre}
        isPlaying={state.paused === false}
        title={track.title}
        permalinkUrl={track.permalinkUrl}
        onPause={handlePause}
        onPlay={handlePlay}
        onSeek={controls.seek}
        time={state.time}
      />
    </>
  );
};

export default PlaylistTrack;
