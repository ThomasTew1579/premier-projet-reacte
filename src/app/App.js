import React, { Component } from 'react'

import initialData from '../constant/initialData/initialData';
import NavBar from '../components/NavBar';
import ToDoList from '../components/ToDoList';
import AddTask from '../components/AddTask/AddTask';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import uniqueid from 'uniqueid'

class App extends Component {

    state = {
        tasks: initialData
    }

    onToggleCompleted = (taskId) => {
        let taskToUpdadte = this.state.tasks.find(task => task.id === taskId)
        taskToUpdadte.completed = !taskToUpdadte.completed

        this.setState(prevState => (
            prevState.tasks.map(task => {
                return task.id === taskId ? taskToUpdadte : task
            })
        ))
    }

    onAddTask =(newTaskName) => {
        let newTask = {
            id: uniqueid(),
            name: newTaskName,
            completed: false
        }

        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }

    onDeleteCompleted = () => {
        this.setState(prevState => {
            let newState = prevState.tasks.filter(task => !task.completed)
            return{
                tasks: newState
            }
        })
    }


  render() {
    return (
      <section id="todo">
        <BrowserRouter>
            <Switch>
                <Route path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} />}/>
                <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />}/>
            </Switch>
        <NavBar onDeleteCompleted={this.onDeleteCompleted} />
        </BrowserRouter>
      </section>
    );
  }
}

export default App
