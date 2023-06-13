// rpce => tp create pure component
// Pure Component =>  If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compairs current state and props with new props and states to decide whether the React component should re-render itself or Not.
//  Pure components only re-render the calss components when there is difference in the shallo comparison of props and state. 
import React, { PureComponent } from "react";

export class Tut16_PureComp extends PureComponent {
  render() {
    console.log("render pure compo");
    return <div className="App">Pure component {this.props.name}</div>;
  }
}

export default Tut16_PureComp;
