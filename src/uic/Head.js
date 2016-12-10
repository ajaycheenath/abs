import React, { Component } from 'react';
import Icon from "../uic/Icon";
import ProfilePicture from "../uic/ProfilePicture";
import iconStyle from "../css/icon.css";
import cardStyle from "../css/card.css";
class Head extends Component {
  render() {
    return (
        <div className={cardStyle.head}>
          <ProfilePicture picture={this.props.picture}/>
          <div className={cardStyle.doctorDetails}>
            <div className={cardStyle.doctorName} >{this.props.name}</div>
            <div className={cardStyle.speciality} >{this.props.speciality}</div>
            <div className={cardStyle.rating} >
              <Icon  styleClass={iconStyle.iconSmall} name="star" />
              <Icon  styleClass={iconStyle.iconSmall} name="star" />
              <Icon  styleClass={iconStyle.iconSmall} name="star" />
              <Icon  styleClass={iconStyle.iconSmall} name="star" />
              <Icon  styleClass={iconStyle.iconSmall} name="star" />
            </div>
          </div>
        </div>
    );
  }
}

export default Head;
