import React from 'react';
import {BrowserRouter} from 'react-router-dom';


import GlobalStyles from '../src/styles/global';
import Header from './components/Header';

import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
