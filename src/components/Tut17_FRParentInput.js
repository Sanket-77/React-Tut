import React, { Component } from 'react'
import Tut17_FRInput from './Tut17_FRInput'

export class Tut17_FRParentInput extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }

    clickHandeler = () => {
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <Tut17_FRInput ref={this.inputRef}/>
        <button onClick={this.clickHandeler}>Focus input</button> 
      </div>
    )
  }
}

export default Tut17_FRParentInput
