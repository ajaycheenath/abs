import React, { Component } from 'react';
import MenuItem from "./MenuItem";
import Icon from "./Icon";
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
          <div className={menuStyle.menu}>
            <div className={this.state.show ? menuStyle.showMenu : menuStyle.hideMenu }>
              <MenuItem name="Home"/>
              <MenuItem name="Contact"/>
              <MenuItem name="Login"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Menu;
