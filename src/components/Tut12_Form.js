import React, { Component } from 'react'

class Tut12_Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: ' ',
      comment: ' ',
      Topic: 'React'
    }
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  HandeleCommentsChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  handelTopicChange = (event) => {
    this.setState({
      Topic: event.target.value
    })
  }
  handelSubmit = (event) => {
    alert(`${this.state.username}, ${this.state.comment}, ${this.state.Topic}`)
  }

  render() {
    return (
      <form className='container' onSubmit={this.handelSubmit}>
        <div >
          <label htmlFor="">User Name </label>
          <input type="text" value={this.state.username} onChange={this.handleUserNameChange} />
        </div>
        <div>
          <label htmlFor="">Comment</label>
          <textarea value={this.state.comment} onChange={this.HandeleCommentsChange}></textarea>
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select value={this.state.Topic} onChange={this.handelTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Tut12_Form
