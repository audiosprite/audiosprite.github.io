import * as React from 'react';
import { PlaylistTrack as PlaylistTrackType } from '../../hooks/usePlaylist';
import useAudio from '../../hooks/useAudio';
import { Audio } from '../../components';

type PlaylistTrackProps = PlaylistTrackType & {
  isCurrentIndex: boolean;
  onEnded: (i: number) => void;
  onSetCurrentIndex: (i: number) => void;
};

const PlaylistTrack = ({
  isCurrentIndex,
  onEnded,
  onSetCurrentIndex,
  ...track
}: PlaylistTrackProps) => {
  const { element, state, controls } = useAudio({
    src: `${track.streamUrl}?client_id=9f32c400308da184e94e83dbbf3391c7`,
  });

  React.useEffect(() => {
    controls.setEndedCallback(() => {
      onEnded(track.playlistIndex);
    });
  }, []);

  React.useEffect(() => {
    if (!isCurrentIndex && !state.paused) {
      controls.pause();
    }
  }, [isCurrentIndex]);

  const handlePlay = () => {
    controls.play();
    if (!isCurrentIndex) onSetCurrentIndex(track.playlistIndex);
  };

  const handlePause = () => {
    controls.pause();
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
