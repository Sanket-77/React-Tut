import React, { Component } from "react";

const HigherOrderWrapper = (WrappedComponent) => {
  return class HigherOrderComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incremenetCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    };

    render() {
      return (
        <>
          <WrappedComponent
            count={this.state.count}
            incremenetCount={this.incremenetCount}
          />
        </>
      );
    }
  };
};
export default HigherOrderWrapper;
