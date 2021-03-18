import * as React from 'react';
// @ts-ignore
import { Progress as RSProgress } from 'react-soundplayer/components';
import { SoundcloudContext } from '../../hooks/useSoundcloud';
import './Progress.scss';

const Progress = () => {
  const { soundCloudAudio } = React.useContext(SoundcloudContext);
  const { currentTime, duration } = soundCloudAudio.audio;
  const percentage = (100 * currentTime) / duration;

  return (
    <div className="Progress">
      <RSProgress soundCloudAudio={soundCloudAudio} value={percentage} />
      {/* <div
        className="Progress--Meter"
        style={{
          backgroundColor: `linear-gradient(90deg, #FFC0CB 50%, transparent 50%);`,
        }}
      /> */}
    </div>
  );
};

export default Progress;
