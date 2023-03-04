import React, { Component } from 'react'
import Tut8_Child_Comp from './Tut8_Child_Comp' 

export class Tut8_Parent_comp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
      alert(`Hello ${this.state.parentName}`)
    }
    
  render() {
    return (
      <div>
        <Tut8_Child_Comp greetHandeler = {this.greetParent}/>
      </div>
    )
  }
}

export default Tut8_Parent_comp
