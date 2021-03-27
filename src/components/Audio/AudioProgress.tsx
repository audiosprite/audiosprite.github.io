import * as React from 'react';
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

  return (
    <div
      className={`AudioProgress ${className}`.trim()}
      onClick={handleSeekTrack}
    >
      <div className="AudioProgress-Inner" style={innerStyle} />
    </div>
  );
};
