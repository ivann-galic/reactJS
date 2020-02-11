import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './About';
import Config from './Config';
import Home from './Home';

export default class App extends Component {

  render() {

    return (
        <Router>
            <nav>
                <div>
                  <ul>
                      <li><Link to="/Home">Accueil</Link></li>
                      <li><Link to="/Config">Config</Link></li>
                      <li><Link to="/About">À propos</Link></li>
                  </ul>
                </div>
            </nav>
            <Switch>

                <Route path="/About"><About /></Route>
                <Route path="/Config"><Config /></Route>
                <Route path="/Home"><Home /></Route>
            </Switch>
        </Router>
    );
  }
}

