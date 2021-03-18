import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { SoundcloudContext } from '../hooks/useSoundcloud';
import { Footer, Header } from '../features';
import { Home } from '../pages';
import './App.scss';

const App = (soundcloudProps: any) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <SoundcloudContext.Provider
      value={{ ...soundcloudProps, activeIndex, setActiveIndex }}
    >
      <div className="App">
        <Header />
        <div className="AppBody">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </SoundcloudContext.Provider>
  );
};

export default withSoundCloudAudio(App);
