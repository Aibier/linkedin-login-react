import React, { Component } from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from '../assets/linkedin.png'
import { clientId, redirectUri } from '../credentials';
class LinkedInPage extends Component {
  state = {
    code: '',
    errorMessage: '',
  };


  handleSuccess = (data) => {
  	console.log(data)
    this.setState({
      code: data.code,
      errorMessage: ''
    });
  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }


  render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
        <LinkedIn
          clientId= {clientId}
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri= { redirectUri }
        >
          <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPage;
