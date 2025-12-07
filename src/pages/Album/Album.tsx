import * as React from 'react';
import { Heading } from '../../components';
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
      <Heading as="h2">Skate Story: Vol. 2</Heading>
      <p>Coming soon</p>
    </div>
  );
};
