import * as React from 'react';

type ApiPlaylistTrack = {
  artwork_url: string;
  genre: string;
  permalink_url: string;
  playlistIndex: number;
  stream_url: string;
  title: string;
};

type PlaylistTrack = {
  artworkUrl: string;
  genre: string;
  permalinkUrl: string;
  playlistIndex: number;
  streamUrl: string;
  title: string;
};

type PlaylistContextType = {
  currentIndex: number;
  isPlaying: boolean;
  onBack: () => void;
  onForward: () => void;
  onPlayPause: () => void;
  tracks: PlaylistTrack[];
};

export const PlaylistContext = React.createContext({
  currentIndex: 0,
  tracks: [] as PlaylistTrack[],
});

export const usePlaylist = () => React.useContext(PlaylistContext);

const usePlaylistProvider = ({
  apiTracks,
}: {
  apiTracks: ApiPlaylistTrack[];
}): PlaylistContextType => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [tracks, setTracks] = React.useState<PlaylistTrack[]>([]);

  React.useEffect(() => {
    if (apiTracks?.length)
      setTracks(
        apiTracks.map(
          ({
            artwork_url,
            genre,
            permalink_url,
            playlistIndex,
            stream_url,
            title,
          }: ApiPlaylistTrack) => ({
            artworkUrl: artwork_url,
            genre,
            permalinkUrl: permalink_url,
            playlistIndex,
            streamUrl: stream_url,
            title,
          }),
        ),
      );
  }, [apiTracks]);

  const onBack = () => {
    setCurrentIndex((currentIndex) => Math.max(0, currentIndex - 1));
  };
  const onForward = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % (tracks.length - 1));
  };
  const onPlayPause = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  // https://api.soundcloud.com/tracks/507496875/stream?client_id=9f32c400308da184e94e83dbbf3391c7

  return { currentIndex, isPlaying, onBack, onForward, onPlayPause, tracks };
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
