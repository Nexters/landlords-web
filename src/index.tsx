import React from 'react';
import { hydrate, render } from 'react-dom';

import EntryRoute from './pages';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from './styles/GlobalStyles';

const rootElement = document.getElementById('root');

if (rootElement?.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <GlobalStyles />
      <EntryRoute />
    </React.StrictMode>,
    rootElement,
  );
} else {
  render(
    <React.StrictMode>
      <GlobalStyles />
      <EntryRoute />
    </React.StrictMode>,
    rootElement,
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
