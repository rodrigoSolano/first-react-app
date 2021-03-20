import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './task.js'

//PropsTypes - Tipos de datos de las propiedades de props

class Tasks extends Component {
  render() {
    return this.props.tasks
      .map(task =>
        <Task key={task.id}
          task={task}
          deleteTask={this.props.deleteTask}
          checkDone={this.checkDone}
        />);
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
}

export default Tasks;