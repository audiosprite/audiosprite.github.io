import * as React from 'react';
import { PlaylistTrack } from '../../hooks/usePlaylist';
import useAudio from '../../hooks/useAudio';
import { Audio } from '../../components';

type PlaylistTrackProps = PlaylistTrack & {
  onPlayPause?: () => void;
};

const PlaylistTrack = (track: PlaylistTrackProps) => {
  const { element, state, controls } = useAudio({
    src: `${track.streamUrl}?client_id=9f32c400308da184e94e83dbbf3391c7`,
  });
  console.log(track);

  return (
    <Audio
      artworkUrl={track.artworkUrl}
      genre={track.genre}
      isPlaying={!state.paused}
      title={track.title}
      permalinkUrl={track.permalinkUrl}
    />
    // <audio
    //   controls
    //   src={
    //     `${track.streamUrl}?client_id=9f32c400308da184e94e83dbbf3391c7` ||
    //     'https://api.soundcloud.com/tracks/507496875/stream?client_id=9f32c400308da184e94e83dbbf3391c7'
    //   }
    // />
  );
};

export default PlaylistTrack;
