import React, { Component } from 'react'

export class Tut13_LifeCycleB extends Component {
    // 1
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'sanket'
      }
      console.log('LifeCycleB Constructor');
    }


    //  2
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedSteteFromProps');
        return null

    }

    // 4
    componentDidMount(){
        console.log('LifeCycleB componentDidMount');
    }

    // 3
  render() {
    console.log('LifeCycleB render ');
    return (
      <div className='container'>
        LifeCycleB
      </div>
    )
  }
}

export default Tut13_LifeCycleB
