import React, { Component } from "react";
import HigherOrderWrapper from "./HigherOrderCompo";

class Pcount extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   clickHandler = () => {
  //     this.setState((prevState) => {
  //       return {
  //         count: prevState.count + 1,
  //       };
  //     });
  //   };

  render() {
    // const { count } = this.state;

    const { count, incremenetCount } = this.props;
    console.log("count", count);
    console.log("Increment", incremenetCount);

    return (
      <div>
        <button onClick={incremenetCount}>Button Click {count} Times</button>
      </div>
    );
  }
}

export default HigherOrderWrapper(Pcount);
