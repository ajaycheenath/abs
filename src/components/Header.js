import React, { Component } from 'react';
import Menu from "./Menu";
import headerStyle from "../css/app.css";


class Header extends Component {
  render() {
    return (
        <div className={headerStyle.header}>
          <div className={headerStyle.productName}>product name</div>
          <Menu search={this.props.search}/>
        </div>
    );
  }
}

export default Header;
