import React, { Component } from "react";

class Tut22_ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log("error => ", error);
    console.log("info => ", info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Somethis went wrong</h1>;
    }
    return this.props.children;
  }
}

export default Tut22_ErrorBoundry;
