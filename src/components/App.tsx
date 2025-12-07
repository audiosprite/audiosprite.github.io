import * as React from 'react';
import { FC, Suspense, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useData } from '../hooks';
import { Footer, Header } from '../features';
import {
  About,
  Album,
  Blog,
  Contact,
  Home,
  JustReleased,
  Press,
  Projects,
  Utils,
} from '../pages';
import { soundcloudData } from '../data';
import Spacer from './Spacer';
import { PlaylistProvider } from '../hooks/usePlaylist';
import './App.scss';

const App: FC = () => {
  const { pathname } = useLocation();

  const { data } = useData(
    'https://api.soundcloud.com/playlists/310569779.json?client_id=9f32c400308da184e94e83dbbf3391c7',
  );

  const isFirstUpdate = useRef(true);
  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }
  }, [pathname]);

  return (
    // <PlaylistProvider apiTracks={data?.tracks || soundcloudData.tracks}>
    <div className="App">
      <div className="App--Background" />
      <Header />
      <Spacer spacing={81} />
      <div className="AppBody">
        <Suspense fallback={<div />}>
          <Routes>
            {/* <Route path="/" element={<JustReleased />} /> */}
            <Route path="/" element={<Album />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/press" element={<Press />} />
            <Route path="/credits" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/utils" element={<Utils />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
    // </PlaylistProvider>
  );
};

export default App;
