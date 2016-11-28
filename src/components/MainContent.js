import React, { Component } from 'react';
import RightPanel from "./RightPanel";
import contentStyle from "../css/mainContent.css";

class MainContent extends Component {
  render() {
    return (
        <div className={contentStyle.mainContent}>
          Main Content
          <RightPanel/>
        </div>
    );
  }
}

export default MainContent;
