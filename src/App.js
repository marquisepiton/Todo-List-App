import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "@testing-library/react";
import List from "./component/List";
import React from "react";

// Parent
class App extends React.Component {
  constructor() {
    super();

    //let tasks = ["task one", "task two", "task three"];
    this.numberOfTask = 0;

    this.DeleteTask = this.DeleteTask.bind(this);
    this.MarkDoneTask = this.MarkDoneTask.bind(this);

    this.state = {
      tasks: [
        { id: 1, desc: "Something1", completed: false, created_at: 123456 },
        { id: 2, desc: "Something2", completed: false, created_at: 123456 },
        { id: 3, desc: "Something3", completed: false, created_at: 123456 },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <List
          tasks={this.state.tasks}
          completedTasks={this.state.completedTasks}
          numberOfTask={this.numberOfTask}
          CreateTask={this.CreateTask}
          DeleteTask={this.DeleteTask}
          MarkDoneTask={this.MarkDoneTask}
        />
      </div>
    );
  }
  // Deletes the task when the user clicks the "X" button.
  DeleteTask(id) {
    let filteredTasks = this.state.tasks.filter((tasks) => tasks.id != id);
    this.setState({
      tasks: filteredTasks,
    });
  }
  CreateTask(id) {}

  // Mark the task complete when the user clicks the radio "O" button.
  MarkDoneTask(id) {
    //filteredCompleted = this.state.tasks.filter((tasks) => tasks.id === id);

    /*
     const found = array1.map(element => {
  
  if(element === 12){
   element = 1000; 
  }
   return  element; 
 });

    */

    let mapTasks = this.state.tasks.map( task => {
      if(task.id === id){
        task.completed = !task.completed;
      }
      return task;
    });
    this.setState({
      tasks: mapTasks,
    });
   
  }
  componentDidUpdate() {}
}
export default App;
