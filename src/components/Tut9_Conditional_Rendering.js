import React, { Component } from 'react'

class Tut9_Conditional_Rendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogedIn: false
        }
    }


    render() {
        //  Use turanary conditional operator approtch 
        return (this.state.isLogedIn) ? (
            <div>Welcome Sanket</div>
        ) : (
            <div>Wlcome Guest</div>
        )

        // let Message 
        // if(this.state.isLogedIn){
        //     Message = <div>Welcome Sanket</div>
        // }else{
        //     Message = <div>Welcome Guest</div>
        // }
        // return <div>{Message}</div>



        // if(this.state.isLogedIn){
        //     return (
        //         <div>Welcome Vishwas</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }


        // return (
        //   <div>

        //   </div>
        // )
    }
}

export default Tut9_Conditional_Rendering
