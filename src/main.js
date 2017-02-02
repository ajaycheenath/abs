import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainContent from './components/MainContent.js';
import Menu from './components/Menu.js';

import { Provider } from "react-redux";
import store from "./store";


class App extends Component {
  componentWillMount () {
    this.setState({showSearch: false});
  }

  showSearchDrawer = () => {
    this.setState({showSearch: true});
  }

  render() {
    return (
        <div>
          <Menu showSearchDrawer={this.showSearchDrawer}/>
          <MainContent showSearch={this.state.showSearch}/>
        </div>
    );
  }
}

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('mainPanel'));
