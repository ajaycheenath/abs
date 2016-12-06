import React, { Component } from 'react';
import rightStyle from "../css/footer.css";

class FooterPanel extends Component {
  render() {
    return (
        <div className={rightStyle.rightPanel}>
          ©all rights reserved
        </div>
    );
  }
}

export default FooterPanel;
