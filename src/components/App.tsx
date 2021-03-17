import * as React from 'react';
import * as CSS from 'csstype';
import { Switch, Route } from 'react-router-dom';
import { Breadcrumbs } from './Breadcrumbs';
import { Home } from '../pages';

const rootStyle: CSS.Properties = {
  fontFamily: 'helvetica, sans-serif',
  fontWeight: 300,
  fontSize: '16px',
  letterSpacing: '0.025em',
  boxSizing: 'border-box',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: 'none',

  maxWidth: '540px',
  margin: '0 auto',
  padding: '3vh 20px 12vh 20px',
};

// const breadcrumbsStyle: CSS.Properties = {
//   margin: '3vh 0',
// };

export const App: React.VFC = () => (
  <div style={rootStyle}>
    {/* <nav style={breadcrumbsStyle}>
      <Breadcrumbs />
    </nav> */}

    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);
