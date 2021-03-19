import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
// @ts-ignore
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { SoundcloudContext } from '../hooks/useSoundcloud';
import { Footer, Header } from '../features';
import { About, Contact, Home, Press, Projects } from '../pages';
import './App.scss';

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
        <div className="AppBody">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/press" component={Press} />
            <Route exact path="/credits" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </SoundcloudContext.Provider>
  );
};

export default withSoundCloudAudio(App);
