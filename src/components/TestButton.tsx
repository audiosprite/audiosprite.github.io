import * as React from 'react';
import { usePlaylist } from '../hooks/usePlaylist';

export const TestButton = () => {
  const {
    audio: { element, controls, state },
  } = usePlaylist();

  console.log(element, controls, state);

  const isPlaying = state.paused === false;

  const handlePlay = () => {
    controls.play();
    // @ts-ignore
    // if (!isCurrentIndex) onSetCurrentIndex(track.playlistIndex);
    // onSetIsPlaying(true);
  };

  const handlePause = () => {
    controls.pause();
    // onSetIsPlaying(false);
  };

  return (
    <button onClick={isPlaying ? controls.pause : controls.play}>hi</button>
  );
};
