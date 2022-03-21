import * as React from 'react';
import { SoundCloudReel } from './SoundCloudReel';
import { YouTube } from '../../components';
import './JustReleased.scss';

const youtubeIds = ['uV5sYqt2D30', '0hbHseelXHA', 'jTmzrS5-TRE'];

export const JustReleased = () => (
  <div className="JustReleased">
    <SoundCloudReel />
    {youtubeIds.map((id) => (
      <YouTube id={id} key={id} />
    ))}
  </div>
);
