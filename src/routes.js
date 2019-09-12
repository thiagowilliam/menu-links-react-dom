import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Noticias from './pages/Noticias';
import CartaPresidente from './pages/CartaPresidente';
import Congresso from './pages/Congresso';
import Programacao from './pages/Programacao';

export default function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Noticias" component={Noticias} />
      <Route path="/CartaPresidente" component={CartaPresidente} />
      <Route path="/Congresso" component={Congresso} />
      <Route path="/Programacao" component={Programacao} />
    </Switch>
  )
}
