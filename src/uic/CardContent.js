import React, { Component } from 'react';
import cardStyle from "../css/card.css";
class CardContent extends Component {
  render() {
    return (
        <div className={cardStyle.content}>
          <div className="doctorDetails">
            <div className={cardStyle.address} title="Clinic Name">Lakeshore Hospital</div>
            <div className={cardStyle.address} title="Address">Maradu, Nettoor, Maradu</div>
            <div className={cardStyle.address}>Ernakulam</div>
            <div className={cardStyle.address}>Kerala</div>
            <div id="contactDiv" className={cardStyle.address} title="Phone Number">91-484-270103291-484-270103391-484-2703951</div>
            </div>
        </div>
    );
  }
}

export default CardContent;
