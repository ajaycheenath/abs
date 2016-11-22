import React, { Component } from 'react';
import './css/main.css';
import Header from "./cui/Header"
import Footer from "./cui/Footer"
import MainContent from "./components/MainContent"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}
export default App;
