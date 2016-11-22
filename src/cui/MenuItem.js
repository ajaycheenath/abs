import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    return (
      <div className="item">{this.props.name}</div>
    );
  }
}

export default MenuItem;
