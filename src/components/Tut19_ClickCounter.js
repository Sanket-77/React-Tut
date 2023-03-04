import React, { Component } from 'react'
import UpdatedComponent from './Tut19_WithCounter'

export class Tut19_ClickCounter extends Component {
  
  render() {
    const {count, incremenetCount} = this.props

    return (<button onClick={incremenetCount}>Clicked {count} times</button>)
  }
}

export default UpdatedComponent(Tut19_ClickCounter)


