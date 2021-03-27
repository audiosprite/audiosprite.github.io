import * as React from 'react';
import { useHover } from '../../hooks';
import { numToTime } from '../../utils';
import './AudioProgress.scss';

type AudioProgressProps = {
  className?: string;
  duration: number;
  onSeek: (timestamp: number) => void;
  time: number;
};

export const AudioProgress = ({
  className,
  duration,
  onSeek,
  time,
}: AudioProgressProps) => {
  const [hoverRef, showTime] = useHover();
  const [hoverTime, setHoverTime] = React.useState<string>();

  const handleSeekTrack = (e: React.MouseEvent<HTMLDivElement>) => {
    const xPos =
      (e.pageX - e.currentTarget.getBoundingClientRect().left) /
      e.currentTarget.offsetWidth;

    onSeek(xPos * duration);
  };

  const innerStyle = React.useMemo(
    () => ({
      transform: `scaleX(${(time || 0) / (duration || 1)})`,
      width: '100%',
    }),
    [time, duration],
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    // console.log(e, e.nativeEvent.offsetX, e.target?.offsetWidth);
    setHoverTime(
      // @ts-ignore
      numToTime((e.nativeEvent.offsetX / e.target?.offsetWidth) * duration),
    );
  };

  return (
    <div
      className={`AudioProgress ${className}`.trim()}
      onClick={handleSeekTrack}
      onMouseMove={handleMouseMove}
      // @ts-ignore
      ref={hoverRef}
    >
      {showTime && <div className="AudioProgress-HoverTime">{hoverTime}</div>}
      <div className="AudioProgress-Inner" style={innerStyle} />
    </div>
  );
};
