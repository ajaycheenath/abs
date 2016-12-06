import React, { Component } from 'react';
import footerStle from "../css/footer.css";
class Footer extends Component {
  render() {
    return (
        <div className={footerStle.footer}>
          <div>&copy;all rights reserved</div>
        </div>
    );
  }
}

export default Footer;
