import * as React from 'react';
import { PlayButton } from '../PlayButton/PlayButton';
import { getSoundcloudArt } from '../../utils';
import Link from '../Link/Link';
import { AudioProgress } from './AudioProgress';
import './Audio.scss';

interface AudioProps {
  artworkUrl?: string;
  className?: string;
  duration: number;
  genre?: string;
  isPlaying: boolean;
  onPause: () => void;
  onPlay: () => void;
  onSeek: (timestamp: number) => void;
  permalinkUrl: string;
  time: number;
  title: string;
}

export const Audio: React.FC<AudioProps> = ({
  artworkUrl,
  className = '',
  duration,
  genre,
  isPlaying,
  onPause,
  onPlay,
  onSeek,
  permalinkUrl,
  time,
  title,
}) => {
  const { imgStyle, src, srcSet } = React.useMemo(
    () => ({
      src: getSoundcloudArt(artworkUrl, 300),
      srcSet: getSoundcloudArt(artworkUrl, 500),
      imgStyle: {
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${Math.random() * 6 + 6}s`,
      },
    }),
    [artworkUrl],
  );

  const handleTogglePlay = () => {
    isPlaying ? onPause() : onPlay();
  };

  return (
    <div
      className={`Audio ${isPlaying ? 'is-active' : ''} ${className}`.trim()}
    >
      <picture>
        <source srcSet={srcSet} media="(min-width: 800px)" />
        <img
          alt={title}
          className="Audio--AlbumArt"
          src={src}
          style={imgStyle}
        />
      </picture>
      {genre && <Link className="tag" href={permalinkUrl}>{`#${genre}`}</Link>}
      <PlayButton
        className="Audio--PlayButton"
        onTogglePlay={handleTogglePlay}
        playing={isPlaying}
      />
      <AudioProgress duration={duration} onSeek={onSeek} time={time} />
    </div>
  );
};
