import React, { Component } from 'react';
import MenuItem from "./MenuItem";
import Icon from "../uic/Icon";
import menuStyle from "../css/menu.css";
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
          <div className={menuStyle.mobileMenu}>
            <Icon styleClass={menuStyle.icon} name="menu" onClick={this.handleClick}/>
          </div>
            <div className={this.state.show ? (menuStyle.menu + " " +menuStyle.showMenu) : (menuStyle.menu +" " +menuStyle.hideMenu) }>
              <MenuItem name="Home"/>
              <MenuItem name="Contact"/>
              <MenuItem name="Login"/>
            </div>
        </div>
    );
  }
}

export default Menu;
