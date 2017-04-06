// Import client startup through a single index entry point
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux"

import Routes from './routes';
import store from "./store"

import '../../../node_modules/grommet-css'

const app = document.getElementById('app')

Meteor.startup( () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>, app);
});