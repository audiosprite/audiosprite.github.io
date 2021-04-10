import * as React from 'react';
import { noop } from '../utils';
import useAudio from './useAudio';

type ApiPlaylistTrack = {
  artwork_url: string;
  duration: number;
  genre: string;
  permalink_url: string;
  playlistIndex: number;
  stream_url: string;
  title: string;
};

export type PlaylistTrack = {
  artworkUrl: string;
  duration: number;
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
        duration,
        genre,
        permalink_url, // playlistIndex,
        stream_url,
        title,
      }: ApiPlaylistTrack,
      i,
    ) => ({
      artworkUrl: artwork_url,
      duration: duration / 1000,
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
  currentTime: number;
  element?: any;
  isPlaying: boolean;
  onBack: () => void;
  onEnded: () => void;
  onForward: () => void;
  onPlayPause: (index?: number) => void;
  onSeek: (index: number, time: number) => void;
  tracks: PlaylistTrack[];
};

export const PlaylistContext = React.createContext({
  currentIndex: null,
  currentTime: 0,
  isPlaying: false,
  onBack: noop,
  onEnded: noop,
  onForward: noop,
  onPlayPause: noop,
  onSeek: noop,
  tracks: [] as PlaylistTrack[],
});

export const usePlaylist: () => PlaylistContextType = () =>
  React.useContext(PlaylistContext);

const usePlaylistProvider = ({
  apiTracks,
}: {
  apiTracks: ApiPlaylistTrack[];
}): PlaylistContextType => {
  const [tracks, setTracks] = React.useState<PlaylistTrack[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);
  const [toSeekTime, setToSeekTime] = React.useState<number>();

  const src = `${
    tracks.length ? tracks[currentIndex || 0].streamUrl : ''
  }?client_id=9f32c400308da184e94e83dbbf3391c7`;
  const audio = useAudio({ src });
  const { controls, state } = audio;
  const isPlaying = !state.paused;

  React.useEffect(() => {
    controls.setEndedCallback(onEnded);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (apiTracks?.length) setTracks(mapApiTracksToTracks(apiTracks));
  }, [apiTracks]);

  React.useEffect(() => {
    if (currentIndex !== null) controls.play();
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (toSeekTime) {
      controls.seek(toSeekTime);
      setToSeekTime(undefined);
    }
  }, [toSeekTime]); // eslint-disable-line react-hooks/exhaustive-deps

  const onBack = React.useCallback(() => {
    setCurrentIndex((currentIndex) => Math.max(0, Number(currentIndex) - 1));
  }, []);

  const onForward = React.useCallback(() => {
    setCurrentIndex(
      (currentIndex) => (Number(currentIndex) + 1) % (tracks.length - 1),
    );
  }, [setCurrentIndex, tracks.length]);

  const onPlayPause = (newCurrentIndex?: number) => {
    if (newCurrentIndex !== undefined) {
      if (newCurrentIndex === currentIndex) {
        controls[isPlaying ? 'pause' : 'play']();
      } else {
        setCurrentIndex(newCurrentIndex);
      }
    } else {
      controls[isPlaying ? 'pause' : 'play']();
    }
  };

  const onEnded = React.useCallback(() => {
    onForward();
  }, [onForward]);

  const onSeek = (seekIndex: number, time: number) => {
    if (seekIndex !== currentIndex) {
      setCurrentIndex(seekIndex);
      setToSeekTime(time);
    }
    controls.seek(time);
  };

  return {
    currentIndex,
    currentTime: audio?.state.time || 0,
    element: audio?.element,
    isPlaying,
    onBack,
    onEnded,
    onForward,
    onPlayPause,
    onSeek,
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
  const { element, ...value } = usePlaylistProvider({ apiTracks });

  return (
    // @ts-ignore
    <PlaylistContext.Provider value={value}>
      {element}
      {children}
    </PlaylistContext.Provider>
  );
};
