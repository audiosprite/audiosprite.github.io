import * as React from 'react';
import { imgDir } from '../../../data';
import './Store.scss';

const storeImgDir = `${imgDir}stores/`;

type StoreProps = {
  name: string;
  size?: number;
};

const Store = ({ name, size = 16 }: StoreProps) => (
  <img
    className="Store"
    src={`${storeImgDir}${name.toLowerCase()}.svg`}
    style={{ height: size, width: size }}
  />
);

export default Store;
