import * as React from 'react';
import { FC, Suspense, useEffect, useRef } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useData } from '../hooks';
import { Footer, Header } from '../features';
import { About, Blog, Contact, Home, Press, Projects, Utils } from '../pages';
// import { Spinner } from './Icons';
import Spacer from './Spacer';
// import { Third } from '.';
import { PlaylistProvider } from '../hooks/usePlaylist';
import { Amplitude } from '../amplitude/amplitude';
import './App.scss';

// const ThirdSpinner = () => (
//   <Third>
//     <Spinner />
//   </Third>
// );

const App: FC<Record<string, unknown>> = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    Amplitude.logEvent('init', { pathname });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { data } = useData(
    'https://api.soundcloud.com/playlists/310569779.json?client_id=9f32c400308da184e94e83dbbf3391c7',
  );

  const isFirstUpdate = useRef(true);
  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }
    Amplitude.logEvent('navigate', { pathname });
  }, [pathname]);

  return (
    // @ts-ignore
    <PlaylistProvider apiTracks={data?.tracks}>
      <div className="App">
        <div className="App--Background" />
        {/* <Noise /> */}
        <Header />
        <Spacer spacing={81} />
        <div className="AppBody">
          <Suspense fallback={<div />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/press" component={Press} />
              <Route exact path="/credits" component={Projects} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/utils" component={Utils} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </PlaylistProvider>
  );
};

export default App;
