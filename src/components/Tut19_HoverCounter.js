import React, { Component } from 'react'
import UpdatedComponent from './Tut19_WithCounter'

class Tut19_HoverCounter extends Component {


  render() {
    const {count, incremenetCount } = this.props
    return (<h1 onMouseOver={incremenetCount}>Hoverd {count} times </h1>)
  }
}

export default UpdatedComponent(Tut19_HoverCounter)
