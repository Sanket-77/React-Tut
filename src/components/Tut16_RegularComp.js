import React, { Component } from 'react'

class Tut16_RegularComp extends Component {
  render() {
    console.log('render regular compo');
    return (
      <div>
        Regular componet {this.props.name}
      </div>
    )
  }
}

export default Tut16_RegularComp
