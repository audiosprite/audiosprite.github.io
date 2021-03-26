import * as React from 'react';
// @ts-ignore
import { PlayButton } from 'react-soundplayer/components';
import { imgDir } from '../../data';
import { useMediaQuery } from '../../hooks';
import { getSoundcloudArt } from '../../utils';
import Link from '../Link/Link';
import './Audio.scss';

interface AudioProps
  extends React.DetailedHTMLProps<
    React.AudioHTMLAttributes<HTMLAudioElement>,
    HTMLAudioElement
  > {
  artworkUrl?: string;
  className?: string;
  genre: string;
  isPlaying: boolean;
  permalinkUrl: string;
  size?: number;
  title: string;
}

export const Audio = ({
  artworkUrl,
  className = '',
  genre,
  isPlaying,
  permalinkUrl,
  size = 200,
  title,
  ...rest
}: AudioProps) => {
  const ref = React.useRef<HTMLAudioElement>();
  const handleTogglePlay = () => {};

  //

  const mediaMatch = window.matchMedia('(min-width: 500px)');
  const [matches, setMatches] = React.useState(mediaMatch.matches);

  React.useEffect(() => {
    const handler = (e: any) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  // or

  const useLargeImages = useMediaQuery('(min-width: 800px)');

  //

  const { imgStyle, src, srcSet } = React.useMemo(
    () => ({
      src: getSoundcloudArt(artworkUrl, 200),
      srcSet: getSoundcloudArt(artworkUrl),
      imgStyle: {
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${Math.random() * 6 + 6}s`,
      },
    }),
    [artworkUrl],
  );
  return (
    <div className={`Audio ${isPlaying ? 'is-active' : ''}`.trim()}>
      {/* <picture>
        <source srcSet={srcSet} media="(min-width: 800px)" />
        <img
          alt={title}
          className="Audio--AlbumArt"
          src={src}
          style={imgStyle}
        />
      </picture> */}
      <div style={styles.backgroundDiv(useLargeImages, artworkUrl || '')} />
      <Link className="tag" href={permalinkUrl}>{`#${genre}`}</Link>
      {/* <PlayButton onTogglePlay={handlePlay} playing={playing && isPlaying} /> */}
    </div>
  );
};

const styles = {
  backgroundDiv: (useLargeImages: boolean, artworkUrl: string) =>
    ({
      backgroundImage: useLargeImages
        ? `url(${getSoundcloudArt(artworkUrl, 200)})`
        : `url(${getSoundcloudArt(artworkUrl, 500)})`,
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundSize: 'cover',
    } as React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >),
};
