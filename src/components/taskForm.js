import React, { Component } from 'react'

export default class TaskForm extends Component {

  state = {
    title: '',
    description: '',
  }

  onSubmit = e => {
    this.props.addTask(this.state.title, this.state.description)
    e.preventDefault();
  }

  onChange = event => {
    this.setState({
      //interpreta el valor entre los corchetes
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a task"
          onChange={this.onChange}
          value={this.state.title}
        />
        <br />
        <br />
        <textarea
          name="description"
          placeholder="Write a description"
          onChange={this.onChange}
          value={this.state.description}
        ></textarea>
        <br />
        <br />
        <input type="submit" />
      </form>
    )
  }

}
