import * as React from 'react';
import { AudioOld, Link, Spacer } from '../../components';
import './RebelFM.scss';

const src =
  'https://rebelfm.libsyn.com/the-rebel-fm-2018-game-music-spectacular';
const imgSrc =
  'https://assets.libsyn.com/secure/content/29999876/?height=250&width=250';
const mp3src =
  'http://traffic.libsyn.com/preview/rebelfm/The_Rebel_FM_2018_Game_Music_Spectactular.mp3';
const srcAtTime = `${mp3src}#t=02:58:43`;
const srcAtTimeTalking = `${mp3src}#t=03:01:45`;

export const RebelFM = () => (
  <div className="RebelFM">
    <AudioOld
      albumArt={'press/rebelfm-spectacular-250.jpeg'}
      src={srcAtTimeTalking}
    />
    <Spacer spacing={12} />
    <div className="RebelFM--Description">
      Listen to Arthur Gies (Polygon) and the rest of the RebelFM crew gush over
      "Ripe Taffy", from Zarvot, in the{' '}
      <Link className="RebelFM--HREF" href={src}>
        RebelFM 2018 Game Music Spectacular
      </Link>
      .
    </div>
  </div>
);
