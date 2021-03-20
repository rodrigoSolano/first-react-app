/**  const App = () => {
   return (<div>This is my component whit a Arrow function</div>)
 
 class App extends React.Component {
   render() {
     return (<div>This is my component whith a class</div>)
   }
 
 function HelloWorld(props) {
   return (
     <div id="hello">
       {props.texto}
       <h3>
         {props.subtitle}
       </h3>
     </div>
   )
 }

Las llaves sirven para interpretar codigo de Js
Por cada elemento que se genere, React espera que se le de un "id" unico a ese elemento
Para hacer esto react tiene una palabra clave llamada key
**/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import tasks from './samples/tasks.json'
import Tasks from './components/tasks'
import TaskForm from './components/taskForm'
import Posts from './components/posts'

//Redux para manejar estados

class App extends Component {
  state = {
    tasks
  }

  addTask = (title, description) => {

    const newTask = {
      title,
      description,
      id: this.state.tasks.length,

    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    })
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return;
    })

    this.setState({ tasks: newTasks })
  }

  render() {
    return <div>
      <Router>

        <Link to="/">Home</Link>
        <br />
        <Link to="/posts">Posts</Link>


        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} />
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts} />
      </Router>

    </div >
  }
}

export default App;