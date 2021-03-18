import * as React from 'react';
import { Link } from '../../components';
import { SocialIcon } from '../../components/Icons';
import {
  twitterHandle,
  instagramHandle,
  soundcloudHandle,
  bandcampHandle,
} from '../../data';
import './Social.scss';

const Social = () => (
  <div className="Social">
    {twitterHandle && (
      <Link href={`https://www.twitter.com/${twitterHandle}`}>
        <SocialIcon name="twitter" />
      </Link>
    )}
    {instagramHandle && (
      <Link href={`https://www.instagram.com/${instagramHandle}`}>
        <SocialIcon name="instagram" />
      </Link>
    )}
    {soundcloudHandle && (
      <a href={`https://www.soundcloud.com/${soundcloudHandle}`}>
        <SocialIcon name="soundcloud" />
      </a>
    )}
    {bandcampHandle && (
      <Link href={`https://${bandcampHandle}.bandcamp.com`}>
        <SocialIcon name="bandcamp" />
      </Link>
    )}
  </div>
);

export default Social;
