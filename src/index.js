import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Visu1 from './visu1';
import Visu2 from './visu2';
import './index.css';



ReactDOM.render(
  <HashRouter basename="/">
    <Switch>
      <Route path="/" component={Visu1} exact />
      <Route path="/visu2" component={Visu2} exact />
     </Switch>
  </HashRouter>,
  document.getElementById('root')
);

