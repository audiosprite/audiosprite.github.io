import * as React from 'react';
import { SoundcloudContext } from '../../hooks/useSoundcloud';
import SoundcloudTrack from './SoundcloudTrack';
import './Soundcloud.scss';
import { Spinner } from '../../components/Icons';
import { Third } from '../../components';

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
