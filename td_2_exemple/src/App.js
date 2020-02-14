import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers'
import './component/Home.css';
import './App.css';
import './component/Timer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './component/Home';
import About from './component/About';
import Timer from './component/Timer';
import Students from './component/Students';
import Student from './component/Students/Student';

import {
  addStudent,
  editStudent,
  delStudent
} from './redux/actions';

const store = createStore(reducer);


export default class App extends React.Component {
    constructor(props) {
      super(props);

    this.routes = [
      {
        path: '/',
        text: 'Accueil',
        component: Home
      },
        {
            path: '/Abouts',
            text: 'A propos',
            component: About
        },
      {
        path: '/students',
        text: 'Etudiants',
        component: Students,
        routes: [
          {
            path: 'student?add',
            text: 'Ajouter',
            component: Student
          },
          {
            path: 'student?edit',
            text: 'Ajouter',
            component: Student
          }
        ]
      }

    ];

    console.log('initial state', store.getState());

    const unsubscribe = store.subscribe(() => console.log(store.getState()));

    store.dispatch(addStudent({
      name: 'Anga',
      age: 32,
      groupe: 1
    }));

    unsubscribe();
  }

  render() {
    const {routes} = this;
    return (
      <Provider store={store}>
        <Router>
          <div class="app">
            <ul>
              {routes.map((route, i) =>
                (
                  <li key={i}><Link to={route.path}>{route.text}</Link></li>
                )
              )}
            </ul>
                <Switch>
                  {routes.map((route, i) =>
                      (
                          <Route key={i} exact path={route.path}><route.component /></Route>
                      )
                  )}
                </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
