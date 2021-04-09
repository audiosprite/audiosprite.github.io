import * as React from 'react';
import { noop } from '../utils';
import useAudio from './useAudio';

type ApiPlaylistTrack = {
  artwork_url: string;
  genre: string;
  permalink_url: string;
  playlistIndex: number;
  stream_url: string;
  title: string;
};

export type PlaylistTrack = {
  artworkUrl: string;
  genre: string;
  permalinkUrl: string;
  playlistIndex: number;
  streamUrl: string;
  title: string;
};

const mapApiTracksToTracks = (apiTracks: ApiPlaylistTrack[]) =>
  apiTracks.map(
    (
      {
        artwork_url,
        genre,
        permalink_url, // playlistIndex,
        stream_url,
        title,
      }: ApiPlaylistTrack,
      i,
    ) => ({
      artworkUrl: artwork_url,
      genre,
      permalinkUrl: permalink_url,
      playlistIndex: i,
      streamUrl: stream_url,
      title,
    }),
  ) as PlaylistTrack[];

type PlaylistContextType = {
  audio?: any;
  currentIndex: number | null;
  isPlaying: boolean;
  onBack: () => void;
  onEnded: () => void;
  onForward: () => void;
  onPlayPause: () => void;
  onSetCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
  onSetIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  tracks: PlaylistTrack[];
};

export const PlaylistContext = React.createContext({
  currentIndex: null,
  isPlaying: false,
  onBack: noop,
  onEnded: noop,
  onForward: noop,
  onPlayPause: noop,
  onSetCurrentIndex: noop,
  onSetIsPlaying: noop,
  tracks: [] as PlaylistTrack[],
});

export const usePlaylist: () => PlaylistContextType = () =>
  React.useContext(PlaylistContext);

const usePlaylistProvider = ({
  apiTracks,
}: {
  apiTracks: ApiPlaylistTrack[];
}): PlaylistContextType => {
  const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [tracks, setTracks] = React.useState<PlaylistTrack[]>([]);

  const src = React.useMemo(
    () =>
      `${
        tracks.length && currentIndex ? tracks[currentIndex].streamUrl : ''
      }?client_id=9f32c400308da184e94e83dbbf3391c7`,
    [tracks, currentIndex],
  );
  const audio = useAudio({ src });

  React.useEffect(() => {
    if (apiTracks?.length) setTracks(mapApiTracksToTracks(apiTracks));
  }, [apiTracks]);

  const onBack = () => {
    setCurrentIndex((currentIndex) => Math.max(0, Number(currentIndex) - 1));
  };
  const onForward = () => {
    setCurrentIndex(
      (currentIndex) => (Number(currentIndex) + 1) % (tracks.length - 1),
    );
  };
  const onPlayPause = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };
  const onEnded = () => {
    onForward();
  };

  return {
    audio,
    currentIndex,
    isPlaying,
    onBack,
    onEnded,
    onForward,
    onPlayPause,
    onSetCurrentIndex: setCurrentIndex,
    onSetIsPlaying: setIsPlaying,
    tracks,
  };
};

type PlaylistProviderProps = {
  apiTracks: [];
};

export const PlaylistProvider: React.FC<PlaylistProviderProps> = ({
  children,
  apiTracks,
}) => {
  const value = usePlaylistProvider({ apiTracks });
  console.log(value);

  return (
    // @ts-ignore
    <PlaylistContext.Provider value={value}>
      {value?.audio?.element}
      {children}
    </PlaylistContext.Provider>
  );
};
