import React, { Component } from 'react';
import contentStyle from "../css/mainContent.css";
import appStyle from "../css/app.css";

import Search from "../uic/Search";



class MainContent extends Component {
  render() {
    return (
        <div className={appStyle.container}>
          <Search/>
        </div>
    );
  }
}

export default MainContent;
