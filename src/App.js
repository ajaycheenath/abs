import React, { Component } from 'react';
import './css/main.css';
import Header from "./cui/Header"
import Footer from "./cui/Footer"
import MainContent from "./components/MainContent"
import Menu from "./cui/Menu";
import Icon from "./cui/Icon";
import appStyle from "./css/app.css";

class App extends Component {
  componentWillMount() {
    this.setState({show: false});
  }
  handleClick =()=> {
    console.log("menu clicked...");
    this.setState({show: !this.state.show});
  }
  render() {
    return (
      <div className={appStyle.app}>
        <Header>
          <div className={appStyle.productName}>product name</div>
          <Menu show={this.state.show}/>
          <div className={appStyle.mobileMenu}>
            <Icon styleClass={appStyle.icon} name="menu" onClick={this.handleClick}/>
          </div>
        </Header>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}
export default App;
