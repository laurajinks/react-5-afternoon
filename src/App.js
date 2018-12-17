import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import router from './router'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          { router }
        </Router>
        </Provider>
    );
  }
}

export default App;