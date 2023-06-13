import React, { Component } from "react";
import UpdatedComponent from "./Tut19_WithCounter";

export class Tut19_ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { count, incremenetCount } = this.props;

    return <button onClick={incremenetCount}>Clicked {count} times</button>;
  }
}

export default UpdatedComponent(Tut19_ClickCounter);
