import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { clientId, resolveUrl } from './data';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <App clientId={clientId} resolveUrl={resolveUrl} />
  </BrowserRouter>,
  document.getElementById('root'),
);
