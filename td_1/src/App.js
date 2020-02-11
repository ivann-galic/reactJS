import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './About';
import Config from './Config';

export default class App extends Component {

  render() {

    return (
        <Router>
            <nav>
                <div>
                  <ul>
                      <li><Link to="/">Accueil</Link></li>
                      <li><Link to="/Config">Config</Link></li>
                      <li><Link to="/About">À propos</Link></li>
                  </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/About"><About /></Route>
                <Route path="/Config"><Config /></Route>
                <div>
                    <h2>Home</h2>
                    <p><getName/>Hello !</p>
                </div>
            </Switch>
        </Router>
    );
  }
}

