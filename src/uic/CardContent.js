import React, { Component } from 'react';
import cardStyle from "../css/card.css";
class CardContent extends Component {
  render() {
    return (
        <div className={cardStyle.content}>
          {this.props.children}
        </div>
    );
  }
}

export default CardContent;
