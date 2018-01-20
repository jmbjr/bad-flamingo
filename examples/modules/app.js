/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import { HashRouter as Router, Route, browserHistory } from 'react-router-dom';
import _ from 'lodash';
import LiNavLink from './li-navlink';

import Multiplayer from './tic-tac-toe/components/multiplayer.js';
import './app.css';

// CSS for the sidebar is taken from vue.css
const App = () => (
  <Router history={browserHistory}>
    <main>
    <div className="headerSection">
      <h1 className="title">Bad Flamingo</h1>
      </div>
      <section className="drawWrapper">
        <Route key="1" exact path="/:gameid/:playerid" component={Multiplayer}/>
      </section>
    </main>
  </Router>
);

export default App;
