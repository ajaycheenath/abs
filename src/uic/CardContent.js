import React, { Component } from 'react';
import cardStyle from "../css/card.css";
class CardContent extends Component {
  render() {
    const {clinicName, address, contact, district, state} = this.props;
    return (
        <div className={cardStyle.content}>
          <div className="doctorDetails">
            <div className={cardStyle.address} title="Clinic Name">{clinicName}</div>
            <div className={cardStyle.address} title="Address">{address}</div>
            <div className={cardStyle.address}>{district}</div>
            <div className={cardStyle.address}>{state}</div>
            <div id="contactDiv" className={cardStyle.address} title="Phone Number">{contact}</div>
            </div>
        </div>
    );
  }
}

export default CardContent;
