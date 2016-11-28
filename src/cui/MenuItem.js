import React, { Component } from 'react';
import menuStyle from "../css/menu.css";
class MenuItem extends Component {
  render() {
    return (
      <div className={menuStyle.item}>{this.props.name}</div>
    );
  }
}

export default MenuItem;
