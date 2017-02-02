import React, { Component } from 'react';
import contentStyle from "../css/mainContent.css";
import appStyle from "../css/app.css";

import Search from "../uic/Search";

// function mapDispatchToProps(dispatch) {
//   return dispatch(doctorActions);
// }

class MainContent extends Component {


  render() {
    return (
        <div className={appStyle.container}>
          <Search showSearch={this.props.showSearch}/>

        </div>
    );
  }
}



export default MainContent;
