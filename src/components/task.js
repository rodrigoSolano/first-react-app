import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Task extends Component {

  StyleCompleted() {
    return {
      fontSize: '20px',
      color: this.props.task.done ? 'gray' : 'black',
      textDocoration: this.props.task.done ? 'overline' : 'none'
    }
  }

  render() {
    const { task } = this.props;
    return <div style={this.StyleCompleted()}>
      {task.title} -
      {task.description} -
      {task.done} -
      {task.id}
      <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
        x
      </button>
    </div>
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

const btnDelete = {
  fontSize: '18px',
  background: '#ea2027',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'rigth'
}

export default Task;