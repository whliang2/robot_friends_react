import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hadError) {
      return <h1>This part of the page couldn't be rendered!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
