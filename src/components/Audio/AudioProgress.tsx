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
  const [
    hoverTimeStyle,
    setHoverTimeStyle,
  ] = React.useState<React.CSSProperties>({});
  const hoverTimeRef = React.useRef<HTMLDivElement>(null);

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
    // @ts-ignore
    const percentage = e.nativeEvent.offsetX / e.target?.offsetWidth;
    setHoverTime(numToTime(percentage * duration));

    const anchor =
      percentage > 0.9 ? 'right' : percentage < 0.1 ? 'left' : 'center';

    let displacement =
      e.nativeEvent.offsetX - (hoverTimeRef.current?.offsetWidth || 0) / 2;
    if (anchor === 'center')
      displacement = (hoverTimeRef.current?.offsetWidth || 0) / 2;
    else if (anchor === 'right')
      displacement = Number(hoverTimeRef.current?.offsetWidth);

    setHoverTimeStyle({
      transform: `translateX(${e.nativeEvent.offsetX - displacement}px)`,
    });
  };

  return (
    <div
      className={`AudioProgress ${className}`.trim()}
      onClick={handleSeekTrack}
      onMouseMove={handleMouseMove}
      // @ts-ignore
      ref={hoverRef}
    >
      {showTime && (
        <div
          className="AudioProgress-HoverTime"
          ref={hoverTimeRef}
          style={hoverTimeStyle}
        >
          {hoverTime}
        </div>
      )}
      <div className="AudioProgress-Inner" style={innerStyle} />
    </div>
  );
};
