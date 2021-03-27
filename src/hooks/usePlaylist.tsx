import * as React from 'react';

const noop = () => {};

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

type PlaylistContextType = {
  currentIndex: number | null;
  isPlaying: boolean;
  onBack: () => void;
  onEnded: (i: number) => void;
  onForward: () => void;
  onPlayPause: () => void;
  onSetCurrentIndex: (i: number) => void;
  tracks: PlaylistTrack[];
};

export const PlaylistContext = React.createContext({
  currentIndex: null,
  onBack: noop,
  onEnded: noop,
  onForward: noop,
  onPlayPause: noop,
  onSetCurrentIndex: noop,
  tracks: [] as PlaylistTrack[],
});

export const usePlaylist = () => React.useContext(PlaylistContext);

const usePlaylistProvider = ({
  apiTracks,
}: {
  apiTracks: ApiPlaylistTrack[];
}): PlaylistContextType => {
  const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [tracks, setTracks] = React.useState<PlaylistTrack[]>([]);

  React.useEffect(() => {
    if (apiTracks?.length)
      setTracks(
        apiTracks.map(
          (
            {
              artwork_url,
              genre,
              permalink_url,
              playlistIndex,
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
        ),
      );
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
  const onEnded = (i: number) => {
    onForward();
  };

  // https://api.soundcloud.com/tracks/507496875/stream?client_id=9f32c400308da184e94e83dbbf3391c7

  return {
    currentIndex,
    isPlaying,
    onBack,
    onEnded,
    onForward,
    onPlayPause,
    onSetCurrentIndex: setCurrentIndex,
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
  return (
    // @ts-ignore
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};
