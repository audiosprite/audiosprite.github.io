import * as React from 'react';
import { Playlist, Soundcloud } from '../features';

const Home = () => {
  return (
    <div className="Home">
      {/* <Soundcloud /> */}
      <Playlist />
    </div>
  );
};

export default Home;
