import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    Increament(){
        // this.setState ({
        //     count: this.state.count + 1
        // },()=>{
        //   console.log('CallBack value', this.state.count);  // callback value 
        // }) 
        // console.log(this.state.count);

        this.setState (prevState => ({
          count: prevState.count+1
        }))
    }

    IncrementFive(){
      this.Increament()
      this.Increament()
      this.Increament()
      this.Increament()
      this.Increament()
    }

        
    
  render() {
    return (
      <div className='Container'>
        <div> count - {this.state.count}</div>
        <button onClick={()=> this.IncrementFive()}>Increament</button>
      </div>
    )
  }
}

export default Counter
