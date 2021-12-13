import * as React from 'react';
import { imgDir } from '../../../data';
import './Img.scss';

type ImgProps = {
  alt?: string;
  className?: string;
  height?: string;
  src: string;
  size?: number;
  width?: string;
};

const Img: React.FC<ImgProps> = ({
  alt,
  className = '',
  height,
  src,
  size,
  width,
}) => (
  <img
    alt={alt}
    className={`Img ${className}`.trim()}
    height={height}
    src={`${imgDir}${src}`.toLowerCase()}
    style={{ width: size }}
    width={width}
  />
);

export default Img;
