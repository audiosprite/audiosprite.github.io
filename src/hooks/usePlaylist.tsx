import * as React from 'react';
import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Amplitude } from '../amplitude/amplitude';
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

export const PlaylistContext = createContext({
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
  useContext(PlaylistContext);

const usePlaylistProvider = ({
  apiTracks,
}: {
  apiTracks: ApiPlaylistTrack[];
}): PlaylistContextType => {
  const [tracks, setTracks] = useState<PlaylistTrack[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [toSeekTime, setToSeekTime] = useState<number>();

  const src = `${
    tracks.length ? tracks[currentIndex || 0].streamUrl : ''
  }?client_id=9f32c400308da184e94e83dbbf3391c7`;
  const audio = useAudio({ src });
  const { controls, state } = audio;
  const isPlaying = !state.paused;

  useEffect(() => {
    controls.setEndedCallback(onEnded);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (apiTracks?.length) setTracks(mapApiTracksToTracks(apiTracks));
  }, [apiTracks]);

  useEffect(() => {
    if (currentIndex !== null) controls.play();
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (toSeekTime) {
      controls.seek(toSeekTime);
      setToSeekTime(undefined);
    }
  }, [toSeekTime]); // eslint-disable-line react-hooks/exhaustive-deps

  const onBack = useCallback(() => {
    setCurrentIndex((currentIndex) => Math.max(0, Number(currentIndex) - 1));
  }, []);

  const onForward = useCallback(() => {
    setCurrentIndex(
      (currentIndex) => (Number(currentIndex) + 1) % (tracks.length - 1),
    );
  }, [setCurrentIndex, tracks.length]);

  const onPlayPause = (newCurrentIndex?: number) => {
    if (newCurrentIndex !== undefined) {
      if (newCurrentIndex === currentIndex) {
        controls[isPlaying ? 'pause' : 'play']();
      } else {
        Amplitude.logEvent(
          'selectTrack',
          (({ genre, playlistIndex, title }) => ({
            genre,
            playlistIndex,
            title,
          }))(tracks[newCurrentIndex]),
        );
        setCurrentIndex(newCurrentIndex);
      }
    } else {
      controls[isPlaying ? 'pause' : 'play']();
    }
  };

  const onEnded = useCallback(() => {
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

export const PlaylistProvider: FC<PlaylistProviderProps> = ({
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
