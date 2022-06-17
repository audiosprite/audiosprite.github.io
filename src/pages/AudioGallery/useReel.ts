import { reelData } from '../../data/reel';
import { ApiPlaylistTrack } from '../../hooks/usePlaylist';

export const useReel: () => ApiPlaylistTrack[] = () => {
  console.log(reelData);

  const filteredReel = reelData.filter((t) => !!t.src);

  return { tracks: filteredReel };
};
