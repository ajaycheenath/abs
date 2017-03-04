import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainContent from './components/MainContent.js';
import Menu from './components/Menu.js';
import GuideMe from './components/GuideMe.js';
import {log, getGobalVariable, setGobalVariable, scrollTop} from './config/Utils';


import { Provider } from "react-redux";
import store from "./store";


class App extends Component {
  componentWillMount () {
    this.setState({showSearch: false});
    if(localStorage.getItem("RETURNING_USER")) {
      var filterString = JSON.stringify(localStorage.getItem("SearchKey"));
      log("Returning user - previous search - "+filterString);
    } else {
      localStorage.setItem("RETURNING_USER", true);
    }
  }

  showSearchDrawer = () => {
    this.setState({showSearch: true});
  }

  render() {
    return (
        <div>
          {window.innerWidth > 800 &&
            <GuideMe onFinish={scrollTop}/>
          }
          <Menu showSearchDrawer={this.showSearchDrawer}/>
          <MainContent showSearch={this.state.showSearch}/>
        </div>
    );
  }
}

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('mainPanel'));
