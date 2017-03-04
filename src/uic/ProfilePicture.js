import React, { Component } from 'react';
import cardStyle from "../css/card.css";
class ProfilePicture extends Component {
  render() {
    return (
        <div className={cardStyle.profilePicture}>
          {this.props.picture && <img src={this.props.picture} className={cardStyle.profilePicture}/>}
        </div>
    );
  }
}

export default ProfilePicture;
