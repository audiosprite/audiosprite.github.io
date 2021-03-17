import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer, Header } from '../features';
import { Home } from '../pages';
import './App.scss';

export const App: React.VFC = () => (
  <div className="App">
    <Header />
    <div className="AppBody">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
    <Footer />
  </div>
);
