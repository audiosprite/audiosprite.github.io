import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

type Buffered = {
  start: number;
  end: number;
};

// https://dev.to/nicomartin/how-to-create-a-progressive-audio-player-with-react-hooks-31l1

const parseTimeRange: (ranges: any) => Buffered = (ranges) =>
  ranges.length < 1
    ? {
        start: 0,
        end: 0,
      }
    : {
        start: ranges.start(0),
        end: ranges.end(0),
      };

type useAudioProps = {
  autoPlay?: boolean;
  src: string;
  startPlaybackRate?: number;
};

type useAudioState = {
  buffered: Buffered;
  time: number;
  duration: number;
  paused: boolean;
  waiting: boolean;
  playbackRate: number;
  endedCallback: null | (() => void);
};

const useAudio = ({
  autoPlay = false,
  src,
  startPlaybackRate = 1,
}: useAudioProps) => {
  const [state, setOrgState] = useState<useAudioState>({
    buffered: {
      start: 0,
      end: 0,
    },
    time: 0,
    duration: 0,
    paused: true,
    waiting: false,
    playbackRate: 1,
    endedCallback: null,
  });
  const setState = (partState: Partial<useAudioState>) =>
    setOrgState({ ...state, ...partState });
  const ref = useRef<HTMLAudioElement>(null);

  const element = React.createElement('audio', {
    src,
    controls: false,
    preload: 'none',
    ref,
    onPlay: () => setState({ paused: false }),
    onPause: () => setState({ paused: true }),
    onWaiting: () => setState({ waiting: true }),
    onPlaying: () => setState({ waiting: false }),
    onEnded: state.endedCallback,
    onDurationChange: () => {
      const el = ref.current;
      if (!el) {
        return;
      }
      const { duration, buffered } = el;
      setState({
        duration,
        buffered: parseTimeRange(buffered),
      });
    },
    onTimeUpdate: () => {
      const el = ref.current;
      if (!el) {
        return;
      }
      setState({ time: el.currentTime });
    },
    onProgress: () => {
      const el = ref.current;
      if (!el) {
        return;
      }
      setState({ buffered: parseTimeRange(el.buffered) });
    },
  });

  let lockPlay = false;

  const controls = {
    play: () => {
      const el = ref.current;
      if (!el) {
        return undefined;
      }

      if (!lockPlay) {
        const promise = el.play();
        const isPromise = typeof promise === 'object';

        if (isPromise) {
          lockPlay = true;
          const resetLock = () => {
            lockPlay = false;
          };
          promise.then(resetLock, resetLock);
        }

        return promise;
      }
      return undefined;
    },
    pause: () => {
      const el = ref.current;
      if (el && !lockPlay) {
        return el.pause();
      }
    },
    seek: (time: number) => {
      const el = ref.current;
      if (!el || state.duration === undefined) {
        return;
      }
      time = Math.min(state.duration, Math.max(0, time));
      el.currentTime = time || 0;
    },
    setPlaybackRate: (rate: number) => {
      const el = ref.current;
      if (!el || state.duration === undefined) {
        return;
      }

      setState({
        playbackRate: rate,
      });
      el.playbackRate = rate;
    },
    setEndedCallback: (callback: () => void) => {
      setState({ endedCallback: callback });
    },
  };

  useEffect(() => {
    const el = ref.current;
    setState({
      paused: el?.paused,
    });

    controls.setPlaybackRate(startPlaybackRate);

    if (autoPlay && el?.paused) {
      controls.play();
    }
  }, [src]);

  return { element, state, controls };
};

export default useAudio;

/*
import React from 'react';
import useAudio from './useAudio';
const Player = () => {
  const { element, state, controls } = useAudio({
    src:
      'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3',
  });

  return (
    <div>
      {element}
      <button onClick={() => controls.seek(state.time - 10)}>-10 sec</button>
      <button
        onClick={() => {
          state.paused ? controls.play() : controls.pause();
        }}
      >
        {state.paused ? 'play' : 'pause'}
      </button>
      <button onClick={() => controls.seek(state.time + 10)}>+10 sec</button>
      <br />
      {Math.round(state.time)} / {Math.round(state.duration)}
      <br />
      Playback Speed (100 = 1)
      <br />
      <input
        onChange={e => controls.setPlaybackRate(e.target.value / 100)}
        type="number"
        value={state.playbackRate * 100}
      />
    </div>
  );
};
*/
