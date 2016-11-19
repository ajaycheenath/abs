import React, { Component } from 'react';
import Menu from "./Menu";


class Header extends Component {
  render() {
    return (
        <div className="header">
          <h2>product name</h2>
          <Menu/>
        </div>
    );
  }
}

export default Header;
