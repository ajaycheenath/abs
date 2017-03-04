import React, { Component } from 'react';
import contentStyle from "../css/mainContent.css";
import appStyle from "../css/app.css";
import Social from './Social';
import Search from "../uic/Search";

// function mapDispatchToProps(dispatch) {
//   return dispatch(doctorActions);
// }

class MainContent extends Component {


  render() {
    return (
        <div className={appStyle.container}>
          <Social/>
          <Search showSearch={this.props.showSearch}/>
        </div>
    );
  }
}



export default MainContent;
