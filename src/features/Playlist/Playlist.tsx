import * as React from 'react';
import { usePlaylist } from '../../hooks/usePlaylist';

const Playlist = () => {
  const { tracks = [] } = usePlaylist();
  return (
    <div>
      {tracks.map((track) => (
        <audio
          controls
          key={track.streamUrl}
          src={
            `${track.streamUrl}?client_id=9f32c400308da184e94e83dbbf3391c7` ||
            'https://api.soundcloud.com/tracks/507496875/stream?client_id=9f32c400308da184e94e83dbbf3391c7'
          }
        />
      ))}
    </div>
  );
};

export default Playlist;
