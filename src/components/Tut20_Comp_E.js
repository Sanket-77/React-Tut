import React, { Component } from 'react'
import Tut20_Comp_F from './Tut20_Comp_F'
import UserContext from '../Tut20_UserContext'

export class Tut20_Comp_E extends Component {
  render() {
    return (
      <div>
        Component E Context {this.context}
        <Tut20_Comp_F/>
      </div>
    )
  }
}

Tut20_Comp_E.contextType = UserContext

export default Tut20_Comp_E


// adding providing value in E component