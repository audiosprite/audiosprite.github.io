import * as React from 'react';
// @ts-ignore
import { PlayButton } from '../PlayButton/PlayButton';
import { imgDir } from '../../data';
import './Audio.scss';

interface AudioProps
  extends React.DetailedHTMLProps<
    React.AudioHTMLAttributes<HTMLAudioElement>,
    HTMLAudioElement
  > {
  albumArt?: string;
  className?: string;
  size?: number;
}

export const AudioOld = ({
  albumArt,
  className = '',
  size = 200,
  ...rest
}: AudioProps) => {
  const ref = React.useRef<HTMLAudioElement>();
  const [playing, setPlaying] = React.useState(false);
  const handleTogglePlay = () => {
    setPlaying((prevPlaying) => {
      if (ref.current) {
        // @ts-ignore
        ref.current[prevPlaying ? 'pause' : 'play']();
        return !prevPlaying;
      }
      return prevPlaying;
    });
  };
  return (
    <div
      className={`Audio ${className}`.trim()}
      style={{
        backgroundImage: `url(${imgDir}${albumArt})`,
        height: size,
        width: size,
      }}
    >
      {/* @ts-ignore */}
      <audio preload="auto" ref={ref} {...rest} />
      {/* {albumArt && <Img className="Audio--AlbumArt" src={albumArt} />} */}
      <PlayButton
        className="AudioOld--PlayButton"
        onTogglePlay={handleTogglePlay}
        playing={playing}
      />
    </div>
  );
};
