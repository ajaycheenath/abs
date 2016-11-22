import React, { Component } from 'react';
import MenuItem from "./MenuItem";
import Icon from "./Icon";
class Menu extends Component {
  componentWillMount() {
    this.setState({show: false});
  }
  handleClick =()=> {
    console.log("menu clicked...");
    this.setState({show: !this.state.show});
  }
  render() {
    return (
        <div>
          <div className="mobileMenu">
            <Icon styleClass="icon" name="menu" onClick={this.handleClick}/>
          </div>
          <div className={this.state.show ? "menu showMenu" : "menu hideMenu"}>
            <MenuItem name="Home"/>
            <MenuItem name="Contact"/>
            <MenuItem name="Login"/>
          </div>
        </div>
    );
  }
}

export default Menu;
