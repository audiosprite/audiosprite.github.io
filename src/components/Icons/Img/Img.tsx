import * as React from 'react';
import { imgDir } from '../../../data';
import './Img.scss';

type ImgProps = {
  alt?: string;
  className?: string;
  src: string;
  size?: number;
};

const Img: React.FC<ImgProps> = ({ alt, className = '', src, size }) => (
  <img
    alt={alt}
    className={`Img ${className}`.trim()}
    src={`${imgDir}${src}`.toLowerCase()}
    style={{ width: size }}
  />
);

export default Img;
