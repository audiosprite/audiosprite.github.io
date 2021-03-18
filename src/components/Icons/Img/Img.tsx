import * as React from 'react';
import { imgDir } from '../../../data';
import './Img.scss';

type ImgProps = {
  alt?: string;
  className?: string;
  src: string;
};

const Img = ({ alt, className, src }: ImgProps) => (
  <img
    alt={alt}
    className={`Img ${className}`.trim()}
    src={`${imgDir}${src}`}
  />
);

export default Img;
