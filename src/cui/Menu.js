import React, { Component } from 'react';
import MenuItem from "./MenuItem";
class Menu extends Component {
  render() {
    return (
        <div className={this.props.show ? "menu showMenu" : "menu hideMenu"}>
          <MenuItem name="Home"/>
          <MenuItem name="Contact"/>
          <MenuItem name="Login"/>
        </div>
    );
  }
}

export default Menu;
