import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DoctorDetails from './components/DoctorDetails';
import Menu from './components/Menu';
import Login from './components/Login';
import Home from './components/Home';
import { log } from "./config/Utils";
import { Provider } from "react-redux";
import store from "./store";

import { Router, Route, browserHistory, IndexRedirect } from 'react-router';


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
          <Menu showSearch={this.state.showSearch}/>
          {this.props.children}
        </div>
    );
  }
}


class AppRoute extends Component {
  componentWillMount() {
    if(localStorage.getItem("returningUser")) {
      log("USER ON HOME PAGE - RETURNING");
    } else {
      log("USER ON HOME PAGE - NEW");
      localStorage.setItem("returningUser","true");
    }
  }

  render(){
    return (
      <div>
        <Menu showSearchDrawer={this.showSearchDrawer}/>
          <Router history={browserHistory}>

            <Route path="/" component={App}>
              <IndexRedirect to="/home" />
              <Route path="home" component={Home} />
              <Route path="doctor/:id" component={DoctorDetails}/>
              <Route path="login" component={Login} />
            </Route>
          </Router>
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}>
  <AppRoute/>
</Provider>, document.getElementById('mainPanel'));
