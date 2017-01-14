import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainContent from './components/MainContent.js';
import Menu from './components/Menu.js';

import { Provider } from "react-redux";
import store from "./store";


class App extends Component {
  render() {
    return (
        <div>
          <Menu />
          <MainContent />
        </div>
    );
  }
}

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('mainPanel'));
