import React, { Component } from 'react'
import axios from 'axios'

export class Tut21_PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userId: ' ',
        title: ' ',
        body: ' '
      }
    }

    changeHandeler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    } 
    submitHandeler = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
    }   
    
    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form  onSubmit={this.submitHandeler}>
                    <div>
                        <input type="text" name='userId' value={userId} onChange={this.changeHandeler} />
                    </div>
                    <div>
                        <input type="text" name='title' value={title} onChange={this.changeHandeler} />
                    </div>
                    <div>
                        <input type="text" name='body' value={body} onChange={this.changeHandeler} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default Tut21_PostForm
