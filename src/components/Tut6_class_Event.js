import React, { Component } from 'react'

export class Tut6_class_Event extends Component {
    clickHandeler(){
        console.log('Clicked button');
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandeler}>Click Me</button>
      </div>
    )
  }
}

export default Tut6_class_Event
