import React, { Component } from 'react'
import Tut14_LifeCycle_B from './Tut14_LifeCycle_B';

// Updating LifeCycle Methods ----------

export class Tut14_LifeCycle_A extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'sanket'
      }
      console.log('LifeCycleA Constructor');
    }

    //  1
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedSteteFromProps');
        return null

    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount');
    }

    //  2
    shouldComponentUpdate(){
        console.log(' LifeCycleA shouldComponentUpdate');
        return true
    }

    //  4 
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null
    }

    //  5 
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate');
    }

    changeState = () =>{
        this.setState({
            name: 'codevaluation'
        })
    }

    // 3
  render() {
    console.log('LifeCycleA render ');
    return (
      <div className='container'>
        <div>LifeCycle A</div> 
        <button onClick={this.changeState}>Change State</button>
        <Tut14_LifeCycle_B/>
      </div>
    )
  }
}

export default Tut14_LifeCycle_A
