import React, { Component } from 'react';
import drawerStyle from "../css/drawer.css";
import Icon from "./Icon";
class Card extends Component {
  componentWillMount() {
    this.setState({show: true});
  }
  onClose  = () =>{
    this.setState({show: false});
  }
  render() {
    if(!this.state.show) {
      return false;
    }
    return (
        <div>
          <div className={drawerStyle.grayOut}>
          </div>
          <div className={drawerStyle.drawer}>
            <Icon styleClass={drawerStyle.close} name="circle-x" onClick={this.handleSearch} onClick={this.onClose}/>
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default Card;
