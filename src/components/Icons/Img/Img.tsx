import * as React from 'react';
import { imgDir } from '../../../data';
import './Img.scss';

type ImgProps = {
  alt?: string;
  className?: string;
  src: string;
  size?: number;
};

const Img = ({ alt, className = '', src, size }: ImgProps) => (
  <img
    alt={alt}
    className={`Img ${className}`.trim()}
    src={`${imgDir}${src}`}
    style={{ width: size }}
  />
);

export default Img;
