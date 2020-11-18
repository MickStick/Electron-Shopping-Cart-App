import React from 'react';

class Landing extends React.Component {
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
      someKey: 'Welcome to Shopper\'s Cart!'
    });
  }
}

export default Landing;
