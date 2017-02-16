import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
    constructor(props) {
        super(props);
    };
    componentWillMount () {
      this.setState({show: true});
    }

    responseFacebook = (response) => {
      console.log(response);
      this.setState({show: false, response: response});
    };

    render() {
      const { show } = this.state;
      console.log("------- show ",show);
      console.log("this.state.response >>>", this.state.response);
      return (
        <div >
          {show &&
            <div>
            <FacebookLogin
              appId="10154986157148674"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends,user_actions.books"
              callback={this.responseFacebook}
            />
            </div>
          }
          {!show &&
            <div className={!show}>
              Welcome, {this.state.response.name}
            </div>
          }
        </div>
      )
    }
}

export default Login;
