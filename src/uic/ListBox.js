import React, { Component } from 'react';
import uicStyle from "../css/uic.css";
class ListBox extends Component {
  render() {
    return (
        <div className="floatLeft">
          <select onChange={this.props.onChange} className={uicStyle.listBox}>
            <option value="">{this.props.label}</option>
          {this.props.list && this.props.list.map((item, index) => {
              return (
                <option value={item} key={index}>{item}</option>
              );
          })}
          </select>
        </div>
    );
  }
}

export default ListBox;
