import React from 'react';

class OAuth extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'Login with your Google or FaceBook account.'
    });
  }
}

export default OAuth;
