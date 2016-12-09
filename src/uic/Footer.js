import React, { Component } from 'react';
import cardStyle from "../css/card.css";
import ProfilePicture from "../uic/ProfilePicture";
import Icon from "../uic/Icon";
import iconStyle from "../css/icon.css";
class Footer extends Component {
  render() {
    return (
        <div className={cardStyle.footer}>
          <div className={cardStyle.controlBox}>
            <div className={cardStyle.control+" "+cardStyle.rightBorder}>
              <Icon styleClass={iconStyle.iconSmall} name="calendar" text="Appointment"/>
            </div>
            <div className={cardStyle.control+" "+cardStyle.rightBorder}>
              <Icon styleClass={iconStyle.iconSmall} name="question-mark" text="Ask Doctor"/>
            </div>
            <div className={cardStyle.control}>
              <Icon styleClass={iconStyle.iconSmall} name="share" text="Share"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Footer;
