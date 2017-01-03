import React, { Component } from 'react';
import MenuItem from "./MenuItem";
import Icon from "../uic/Icon";
import menuStyle from "../css/menu.css";
import appStyle from "../css/app.css";
class Menu extends Component {
  componentWillMount() {
    this.setState({show: false});
  }
  handleClick =()=> {
    this.setState({show: !this.state.show});
  }
  handleSearch =()=> {
    this.props.search();
  }
  render() {
    return (
        <div>
          <div className={menuStyle.mobileMenu}>
            <Icon styleClass={menuStyle.icon} name="magnifying-glass" onClick={this.handleSearch}/>
            <Icon styleClass={menuStyle.icon} name="menu" onClick={this.handleClick}/>
        </div>
            <div className={this.state.show ? (menuStyle.menu + " " +menuStyle.showMenu) : (menuStyle.menu +" " +menuStyle.hideMenu+" "+appStyle.slide) }>
              <MenuItem name="Home"/>
              <MenuItem name="Contact"/>
              <MenuItem name="Login"/>
            </div>
        </div>
    );
  }
}

export default Menu;
