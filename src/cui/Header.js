import React, { Component } from 'react';
import Menu from "./Menu";
import headerStyle from "../App.css";


class Header extends Component {
  render() {
    return (
        <div className={headerStyle.header}>
          <div className={headerStyle.productName}>product name</div>
          <Menu/>
        </div>
    );
  }
}

export default Header;
