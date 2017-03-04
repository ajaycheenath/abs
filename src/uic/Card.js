import React, { Component } from 'react';
import cardStyle from "../css/card.css";
import {baseApiUrl, doctorDetailsUrl} from "../config/Config";
import {log} from "../config/Utils";
class Card extends Component {
  openDoctorDetails = () => {
    log("User Clicked on Search result Doctor Card. Id="+this.props.id);
    window.location.href = doctorDetailsUrl + this.props.id;
  }
  render() {
    return (
        <div className={cardStyle.card} onClick={this.openDoctorDetails} name={this.props.name}>
          {this.props.children}
        </div>
    );
  }
}

export default Card;
