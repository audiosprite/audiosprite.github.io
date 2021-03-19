import * as React from 'react';
// @ts-ignore
import { PlayButton } from 'react-soundplayer/components';
import { Link } from '../../components';
import { SoundcloudContext } from '../../hooks/useSoundcloud';
import './SoundcloudTrack.scss';

const get500 = (url = '') => {
  const index = url.lastIndexOf('large');
  const dot = url.lastIndexOf('.');
  const url500 = `${url.substr(0, index)}t500x500${url.substr(dot)}`;
  return url500 && url500.includes('.') ? url500 : url;
};

type SoundcloudTrackProps = {
  artwork_url: string;
  genre: string;
  permalink_url: string;
  playlistIndex: number;
};

const SoundcloudTrack = ({
  artwork_url,
  genre,
  permalink_url,
  playlistIndex,
}: SoundcloudTrackProps) => {
  const {
    activeIndex,
    playing,
    setActiveIndex,
    soundCloudAudio,
  } = React.useContext(SoundcloudContext);

  const isPlaying = playing && activeIndex === playlistIndex;

  const handlePlay = (e: MouseEvent) => {
    if (e) e.preventDefault();
    if (isPlaying) {
      soundCloudAudio.pause();
    } else {
      setActiveIndex(playlistIndex);
      soundCloudAudio.play({ playlistIndex });
    }
  };

  const albumArtStyle = React.useMemo(
    () => ({
      background: `url(${get500(artwork_url)})`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${Math.random() * 6 + 6}s`,
    }),
    [artwork_url],
  );

  return (
    <div
      className={`SoundcloudTrack ${
        playing && isPlaying ? 'is-active' : ''
      }`.trim()}
      // style={{ backgroundImage: `url(${get500(artwork_url)})` }}
    >
      <div className="SoundcloudTrack--AlbumArt" style={albumArtStyle} />
      <Link className="tag" href={permalink_url}>{`#${genre}`}</Link>
      <PlayButton
        onTogglePlay={handlePlay}
        playing={playing && isPlaying}
        soundCloudAudio={soundCloudAudio}
      />
    </div>
  );
};

export default SoundcloudTrack;
