import React, { Component } from 'react';
import MainContent from './MainContent';

class Home extends Component {
  componentWillMount () {

    this.setState({showSearch: false});
  }

  showSearchDrawer = () => {
    this.setState({showSearch: true});
  }

  render() {
    return (
        <div>
          <MainContent showSearch={this.state.showSearch}/>
        </div>
    );
  }
}

export default Home;
