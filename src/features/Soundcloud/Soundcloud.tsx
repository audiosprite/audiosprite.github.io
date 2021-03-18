import * as React from 'react';
import { SoundcloudContext } from '../../hooks/useSoundcloud';
import SoundcloudTrack from './SoundcloudTrack';
import './Soundcloud.scss';

const Soundcloud = () => {
  const p = React.useContext(SoundcloudContext);
  const tracks = p?.soundCloudAudio?._playlist?.tracks || [];

  return (
    <div className="Soundcloud">
      {tracks.map((track, i) => (
        // @ts-ignore
        <SoundcloudTrack key={track.id} playlistIndex={i} {...track} />
      ))}
    </div>
  );
};

export default Soundcloud;
