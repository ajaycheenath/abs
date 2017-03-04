import React, { Component } from 'react';
import socialStyle from "../css/social.css";


class Social extends Component {
  openFacebook () {
    window.open('https://www.facebook.com/bestdoctorz','_parent');
  }
  openLinkedIn () {
    window.open('https://www.linkedin.com/company/bestdoctorz-com','_parent');
  }
  openTwitter () {
    window.open('https://twitter.com/bestdoctorz','_parent');
  }
  render() {
    return (
      <div className={socialStyle.social} name="guideme-social">
        <div className={socialStyle.icon +" "+socialStyle.facebook} onClick={this.openFacebook}></div>
        <div className={socialStyle.icon +" "+socialStyle.linkedin} onClick={this.openLinkedIn}></div>
        <div className={socialStyle.icon +" "+socialStyle.twitter} onClick={this.openTwitter}></div>
      </div>
    );
  }
}

export default Social;
