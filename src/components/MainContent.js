import React, { Component } from 'react';
import RightPanel from "./RightPanel"

class MainContent extends Component {
  render() {
    return (
        <div className="mainContent">
          Main Content
          <RightPanel/>
        </div>
    );
  }
}

export default MainContent;
