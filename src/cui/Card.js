import React, { Component } from 'react';
import footerStle from "../css/card.css";
class Card extends Component {
  render() {
    return (
        <div className={footerStle.footer}>
          <div>&copy;all rights reserved</div>
        </div>
    );
  }
}

export default Card;
