import * as React from 'react';
import { imgDir } from '../../../data';
import './SocialIcon.scss';

const socialImgDir = `${imgDir}social/`;

type StoreProps = {
  name: string;
  size?: number;
};

const SocialIcon = ({ name, size = 24 }: StoreProps) => (
  <img
    alt={name}
    className="Store"
    src={`${socialImgDir}${name.toLowerCase()}.svg`}
    style={{ height: size, width: size }}
  />
);

export default SocialIcon;
