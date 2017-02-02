import React, { Component } from 'react';
import MenuItem from "./MenuItem";
import Icon from "../uic/Icon";
import menuStyle from "../css/menu.css";
import appStyle from "../css/app.css";
import { connect } from "react-redux";
import { showSearchDrawer } from "../actions/doctorActions";
function mapStateToProps(state) {
  console.log(">?>>", state.doctorsearch.showSearch);
  return {showSearch: state.doctorsearch.showSearch};
}
class Menu extends Component {
  componentWillMount() {
    this.setState({show: false});
  }
  handleClick =()=> {
    this.setState({show: !this.state.show});
  }
  handleSearch =()=> {
    this.props.dispatch(showSearchDrawer(true));
    this.setState({show: false});
  }
  render() {
    console.log("lllllll>>>",this.props.showSearch);
    let style =  (this.props.showSearch ? " hide" : menuStyle.mobileMenu +" show");
    return (
        <div>
            <div className={style}>
              <Icon styleClass={menuStyle.searchIcon} name="magnifying-glass" onClick={this.handleSearch}/>
              <Icon styleClass={menuStyle.icon} name="menu" onClick={this.handleClick}/>
            </div>
            <div className={this.state.show ? (menuStyle.menu + " " +menuStyle.showMenu) : (menuStyle.menu +" " +menuStyle.hideMenu+" "+appStyle.slide) }>
              <MenuItem name="HOME" onClick={() => {window.location.href="home"}}/>
              <MenuItem name="FIND DOCTORS" onClick={this.handleSearch}/>
              <MenuItem name="ADD DOCTOR" onClick={() => {window.location.href="recommenddoctor"}}/>
              <MenuItem name="CLINICS" onClick={() => {window.location.href="clinics"}}/>
            </div>
        </div>
    );
  }
}

const MenuConnect = connect(
  mapStateToProps
)(Menu)

export default MenuConnect;
