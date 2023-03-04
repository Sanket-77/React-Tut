// rpce => tp create pure component 

import React, { PureComponent } from 'react'

export class Tut16_PureComp extends PureComponent {
  render() {
    console.log('render pure compo');
    return (
      <div className='App'>
        Pure component {this.props.name}
      </div>
    )
  }
}

export default Tut16_PureComp

