import * as React from 'react';
import './YouTube.scss';

type YouTubeProps = { id: string };

export const YouTube = ({ id }: YouTubeProps) => (
  <div className="YouTube">
    <iframe
      width="853"
      height="480"
      //   width="100%"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
