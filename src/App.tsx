import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import './styles/main.scss';

const Todo = Loadable({
  loader: () => import('./pages/Todo/Todo'),
  loading: () => <div>Loading...</div>
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/todo" component={Todo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
