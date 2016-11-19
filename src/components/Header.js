import React, { Component } from 'react';
import Menu from "./Menu";


class Header extends Component {
  render() {
    return (
        <div className="header">
          <div className="productName">product name</div>
          <Menu/>
        </div>
    );
  }
}

export default Header;
