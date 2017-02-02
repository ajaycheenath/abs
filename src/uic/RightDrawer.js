import React, { Component } from 'react';
import drawerStyle from "../css/drawer.css";
import Icon from "./Icon";
class Card extends Component {
  componentWillMount() {
    this.setState({show: true});
  }
  onClose  = () =>{
    this.props.showDrawer(false);
  }
  render() {
    return (
        <div>
          <div className={drawerStyle.grayOut}>
          </div>
          <div className={drawerStyle.drawer}>
            <Icon styleClass={drawerStyle.close} name="circle-x"  onClick={this.onClose}/>
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default Card;
