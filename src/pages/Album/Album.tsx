import * as React from 'react';
import { Heading } from '../../components';
import './Album.scss';

const BandcampIframe = () => (
  <iframe
    style={{
      border: '0',
      borderRadius: '16px',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      width: '500px',
      height: '620px',
      marginBottom: '75px',
    }}
    src="https://bandcamp.com/EmbeddedPlayer/album=2108143031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
    seamless
    title="Skate Story: Vol. 2"
  >
    <a href="https://audiosprite.bandcamp.com/album/skate-story-vol-2">
      Skate Story: Vol. 2 by John Fio
    </a>
  </iframe>
);

export const Album = () => {
  return (
    <div className="Album">
      <div className="Album--Header">
        <Heading as="h2">Skate Story: Vol. 2</Heading>
        <p>Available now</p>
      </div>
      <BandcampIframe />
    </div>
  );
};
