import * as React from 'react';
import './Album.scss';

export const Album = () => {
  return (
    <div className="Album">
      <a
        href="https://audiosprite.bandcamp.com/album/skate-story-vol-2"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/build/img/albums/skate-story-vol-2.jpg" alt="Album" />
      </a>
      <h1>Skate Story: Vol. 2</h1>
      <p>Coming soon</p>
    </div>
  );
};
