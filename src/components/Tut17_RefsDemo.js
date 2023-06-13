import React, { Component } from "react";

//  Refs make it possible to access DOM node directally within react.

class Tut17_RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); //1
  }

  componentDidMount() {
    this.inputRef.current.focus(); //3
    console.log(this.inputRef);
  }

  clickHandeler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div className="containerx">
        <input type="text" ref={this.inputRef} /> // 2 
        <button onClick={this.clickHandeler}>Click</button>
      </div>
    );
  }
}

export default Tut17_RefsDemo;
