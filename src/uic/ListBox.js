import React, { Component } from 'react';
import uicStyle from "../css/uic.css";
class ListBox extends Component {
  render() {
    return (
        <div className="floatLeft">
          <div className={uicStyle.label}>{this.props.label}</div>
          <select onChange={this.props.onChange} className={uicStyle.listBox}>
          {this.props.list.map((item, index) => {
              return (
                <option value={item.value} key={index}>{item.name}</option>
              );
          })}
          </select>
        </div>
    );
  }
}

export default ListBox;
