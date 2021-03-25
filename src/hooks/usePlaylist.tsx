import * as React from 'react';

type PlaylistTrack = {
  artwork_url: string;
  genre: string;
  permalink_url: string;
  playlistIndex: number;
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
  tracks: [],
});

export const usePlaylist = () => React.useContext(PlaylistContext);

// @ts-ignore
const usePlaylistProvider = ({ apiTracks }) => {
  const [currentIndex] = React.useState(0);
  const [isPlaying] = React.useState(false);
  const [tracks, setTracks] = React.useState([]);

  React.useEffect(() => {
    console.log('api tracks', apiTracks);
    setTracks(
      (apiTracks || []).map(
        // @ts-ignore
        ({ artwork_url, genre, permalink_url, playlistIndex, title }) => ({
          artwork_url,
          genre,
          permalink_url,
          playlistIndex,
          title,
        }),
      ),
    );
  }, [apiTracks]);

  const onBack = () => {};
  const onForward = () => {};
  const onPlayPause = () => {};

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
