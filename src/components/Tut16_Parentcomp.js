import React, { Component } from 'react'
import Tut16_Memo from './Tut16_Memo'
import Tut16_PureComp from './Tut16_PureComp'
import Tut16_RegularComp from './Tut16_RegularComp'

export class Tut16_Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'sanket'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
              name: 'sanket'
            })
        },2000)
    }
    
  render() {
    console.log('****************render parent compo*****************************');
    return (
      <div className='containerx'>
        parent componet
        {/* <Tut16_RegularComp name = {this.state.name} /> */}
        {/* <Tut16_PureComp name ={this. state.name}/> */}
        <Tut16_Memo name = {this.state.name}/>
      </div>
    )
  }
}

export default Tut16_Parentcomp
