import * as React from 'react';
import { SoundcloudContext } from '../../hooks/useSoundcloud';
import SoundcloudTrack from './SoundcloudTrack';
import { Spinner } from '../../components/Icons';
import { Third } from '../../components';
import './Soundcloud.scss';

// https://api.soundcloud.com/resolve.json?url=https%3A%2F%2Fsoundcloud.com%2Faudiosprite%2Fsets%2Freel&client_id=9f32c400308da184e94e83dbbf3391c7
// 303's to:
// https://api.soundcloud.com/playlists/310569779.json?client_id=9f32c400308da184e94e83dbbf3391c7

const Soundcloud = () => {
  const p = React.useContext(SoundcloudContext);
  const tracks = p?.playlist?.tracks || [];

  return (
    <div className="Soundcloud">
      {p.playlist ? (
        tracks.map((track, i) => (
          // @ts-ignore
          <SoundcloudTrack key={track.id} playlistIndex={i} {...track} />
        ))
      ) : (
        <Third>
          <Spinner />
        </Third>
      )}
    </div>
  );
};

export default Soundcloud;
