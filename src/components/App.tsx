import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// @ts-ignore
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { SoundcloudContext } from '../hooks/useSoundcloud';
import { Footer, Header } from '../features';
import { Spinner } from './Icons';
import Spacer from './Spacer';
import { Third } from '.';
import './App.scss';

const About = React.lazy(() => import('../pages/About/About'));
const Contact = React.lazy(() => import('../pages/Contact/Contact'));
const Home = React.lazy(() => import('../pages/Home'));
const Press = React.lazy(() => import('../pages/Press/Press'));
const Projects = React.lazy(() => import('../pages/Projects/Projects'));

const ThirdSpinner = () => (
  <Third>
    <Spinner />
  </Third>
);

const App = (soundcloudProps: any) => {
  // console.log(soundcloudProps);
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <SoundcloudContext.Provider
      value={{ ...soundcloudProps, activeIndex, setActiveIndex }}
    >
      <div className="App">
        <div className="App--Background" />
        {/* <Noise /> */}
        <Header />
        <Spacer spacing={81} />
        <div className="AppBody">
          <React.Suspense fallback={<div />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/press" component={Press} />
              <Route exact path="/credits" component={Projects} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
          </React.Suspense>
        </div>
        <Footer />
      </div>
    </SoundcloudContext.Provider>
  );
};

export default withSoundCloudAudio(App);
