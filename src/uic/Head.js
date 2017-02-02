import React, { Component } from 'react';
import Rating from "../uic/Rating";
import ProfilePicture from "../uic/ProfilePicture";
import iconStyle from "../css/icon.css";
import cardStyle from "../css/card.css";
import {baseApiUrl, doctorDetailsUrl} from "../config/Config";
import {truncate} from "../config/Utils";
class Head extends Component {

  openDoctorDetails = () => {
    window.location.href = doctorDetailsUrl + this.props.id;
  }
  render() {
    const {rating=0} = this.props;
    let fullRating = Math.ceil(rating);
    const stars = [1,2,3,4,5];
    return (
        <div className={cardStyle.head}>
          {<ProfilePicture picture={this.props.picture ? baseApiUrl+"/api/getsmallphoto/"+this.props.picture : null}/>}
          <div className={cardStyle.doctorDetails}>
            <div className={cardStyle.doctorName} onClick={this.openDoctorDetails}>{this.props.name}</div>
            <div className={cardStyle.speciality} >{truncate(this.props.speciality, 20)}</div>
            <div className={cardStyle.rating} >
            <Rating rating={fullRating}/>
            </div>
          </div>
        </div>
    );
  }
}

export default Head;
