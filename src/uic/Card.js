import React, { Component } from 'react';
import cardStyle from "../css/card.css";
class Card extends Component {
  render() {
    return (
        <div className={cardStyle.card}>
          {this.props.children}
        </div>
    );
  }
}

export default Card;
