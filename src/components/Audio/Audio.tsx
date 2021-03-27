import * as React from 'react';
// @ts-ignore
import { PlayButton } from 'react-soundplayer/components';
import { getSoundcloudArt } from '../../utils';
import Link from '../Link/Link';
import './Audio.scss';

interface AudioProps {
  artworkUrl?: string;
  className?: string;
  genre?: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  permalinkUrl: string;
  size?: number;
  title: string;
}

export const Audio = ({
  artworkUrl,
  className = '',
  genre,
  isPlaying,
  onTogglePlay,
  permalinkUrl,
  size = 200,
  title,
}: AudioProps) => {
  const { imgStyle, src, srcSet } = React.useMemo(
    () => ({
      src: getSoundcloudArt(artworkUrl, 200),
      srcSet: getSoundcloudArt(artworkUrl, 500),
      imgStyle: {
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${Math.random() * 6 + 6}s`,
      },
    }),
    [artworkUrl],
  );
  return (
    <div className={`Audio ${isPlaying ? 'is-active' : ''}`.trim()}>
      <picture>
        <source srcSet={srcSet} media="(min-width: 800px)" />
        <img
          alt={title}
          className="Audio--AlbumArt"
          src={src}
          style={imgStyle}
        />
      </picture>
      {/* <div style={styles.backgroundDiv(useLargeImages, artworkUrl || '')} /> */}
      {genre && <Link className="tag" href={permalinkUrl}>{`#${genre}`}</Link>}
      <PlayButton onTogglePlay={onTogglePlay} playing={isPlaying} />
    </div>
  );
};

// const styles = {
//   backgroundDiv: (useLargeImages: boolean, artworkUrl: string) =>
//     ({
//       backgroundImage: useLargeImages
//         ? `url(${getSoundcloudArt(artworkUrl, 500)})`
//         : `url(${getSoundcloudArt(artworkUrl, 200)})`,
//       width: '100%',
//       height: '100%',
//       position: 'absolute',
//       left: 0,
//       top: 0,
//       backgroundSize: 'cover',
//     } as React.DetailedHTMLProps<
//       React.HTMLAttributes<HTMLDivElement>,
//       HTMLDivElement
//     >),
// };
