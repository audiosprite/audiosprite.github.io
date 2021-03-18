import * as React from 'react';
import { imgDir } from '../../../data';
import './Store.scss';

const socialImgDir = `${imgDir}social/`;
const storeImgDir = `${imgDir}stores/`;

type StoreProps = {
  name: string;
  size?: number;
};

const Store = ({ name, size = 16 }: StoreProps) => {
  const directory = name === 'Instagram' ? socialImgDir : storeImgDir;
  return (
    <img
      className="Store"
      src={`${directory}${name.toLowerCase()}.svg`}
      style={{ height: size, width: size }}
    />
  );
};

export default Store;
