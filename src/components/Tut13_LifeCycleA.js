import React, { Component } from 'react'
import Tut13_LifeCycleB from './Tut13_LifeCycleB';

// Mounting LifeCycle Methods ----------

export class Tut13_LifeCycleA extends Component {
    // 1
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'sanket'
      }
      console.log('LifeCycleA Constructor');
    }


    //  2
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedSteteFromProps');
        return null

    }

    // 4
    componentDidMount(){
        console.log('LifeCycleA componentDidMount');
    }

    // 3
  render() {
    console.log('LifeCycleA render ');
    return (
      <div className='container'>
        <div>LifeCycleA</div> 
        <Tut13_LifeCycleB/>
      </div>
    )
  }
}

export default Tut13_LifeCycleA
