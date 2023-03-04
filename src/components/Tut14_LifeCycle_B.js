import React, { Component } from 'react'

// Updating LifeCycle Methods ----------
//  child component 

export class Tut14_LifeCycle_B extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'sanket'
      }
      console.log('LifeCycleB Constructor');
    }


    //  1
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedSteteFromProps');
        return null

    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount');
    }

    //  2
    shouldComponentUpdate(){
        console.log(' LifeCycleB shouldComponentUpdate');
        return true
    }

    //  4 
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null
    }

    //  5 
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate');
    }


    // 3
  render() {
    console.log('LifeCycleB render ');
    return (
      <div className='container'>
        <div>LifeCycle B</div> 
      </div>
    )
  }
}

export default Tut14_LifeCycle_B
