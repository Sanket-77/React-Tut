import React, { Component } from "react";

class Tut7_EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // Binding event in constructor 3.Method
    // this.clickHandeler = this.clickHandeler.bind(this);
  }

  // clickHandeler() {
  //   this.setState({
  //     message: "Good Bye",
  //   });
  // }

  //  Binding Event with the arrow function 4. Method

  clickHandeler = () => {
    this.setState({
      message: " Good Bye  ",
    });
  };

  render() {
    return (
      <div className="container">
        <div>{this.state.message}</div>
        {/* Bind event whith .bind(this) in render 1.method  }
        {/* <button onClick={this.clickHandeler.bind(this)}>Click</button> */}
        {/* bind event with arrow function in render 2. Method */}
        {/* <button onClick={() => this.clickHandeler()}>Click</button> */}
        <button onClick={this.clickHandeler}>Click</button>
      </div>
    );
  }
}

export default Tut7_EventBind;
