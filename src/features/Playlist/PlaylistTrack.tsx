import * as React from 'react';
import { PlaylistTrack as PlaylistTrackType } from '../../hooks/usePlaylist';
import useAudio from '../../hooks/useAudio';
import { Audio } from '../../components';

type PlaylistTrackProps = PlaylistTrackType;

const PlaylistTrack = (track: PlaylistTrackProps) => {
  const { element, state, controls } = useAudio({
    src: `${track.streamUrl}?client_id=9f32c400308da184e94e83dbbf3391c7`,
  });

  const handleTogglePlay = () =>
    state.paused ? controls.play() : controls.pause();
  console.log(state);

  return (
    <>
      {element}
      <Audio
        artworkUrl={track.artworkUrl}
        genre={track.genre}
        isPlaying={state.paused === false}
        title={track.title}
        permalinkUrl={track.permalinkUrl}
        onTogglePlay={handleTogglePlay}
      />
    </>
  );
};

export default PlaylistTrack;
