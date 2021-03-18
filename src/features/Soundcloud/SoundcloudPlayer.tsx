import * as React from 'react';
import { Button } from '../../components';
import { Img } from '../../components/Icons';
import { SoundcloudContext } from '../../hooks/useSoundcloud';
import './SoundcloudPlayer.scss';

const SoundcloudPlayer = () => {
  const { playing, soundCloudAudio } = React.useContext(SoundcloudContext);

  const handleClick = () => {
    if (playing) soundCloudAudio.pause();
    // @ts-ignore
    else soundCloudAudio.play();
  };

  return (
    <div className="SoundcloudPlayer">
      <Button
        className={`SoundcloudPlayer--PlayPause ${
          playing ? 'isPlaying' : 'isPaused'
        }`.trim()}
        onClick={handleClick}
      >
        <Img
          size={24}
          src={playing ? 'soundcloud/pause.svg' : 'soundcloud/play.svg'}
        />
      </Button>
    </div>
  );
};

export default SoundcloudPlayer;
