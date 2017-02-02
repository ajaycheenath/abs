import React, { Component } from 'react';
import cardStyle from "../css/card.css";
class CardContent extends Component {
  displayData = (_data) => {
    if(_data && _data != "null" && _data != "NA") {
      return (
        <div className={cardStyle.address}>{_data}</div>
      );
    }
  }
  render() {
    const {clinicName, address, contact, district, state} = this.props;
    return (
        <div className={cardStyle.content}>
          <div className="doctorDetails">
            {this.displayData(clinicName)}
            {this.displayData(address)}
            {this.displayData(district)}
            {this.displayData(state)}
            {this.displayData(contact)}
            </div>
        </div>
    );
  }
}

export default CardContent;
