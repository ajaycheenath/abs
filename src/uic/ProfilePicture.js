import React, { Component } from 'react';
import cardStyle from "../css/card.css";
class ProfilePicture extends Component {
  render() {
    return (
        <div className={cardStyle.profilePicture}>
          <img src={this.props.picture} className={cardStyle.profilePicture} onclick="showImage.show(&quot;http://bestdoctorz.com:8080/api/getphoto/72722.1480329416434clinic1.jpg&quot;);"/>
        </div>
    );
  }
}

export default ProfilePicture;
