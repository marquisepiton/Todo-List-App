import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./component/Task";
import React from "react";

// Parent
class App extends React.Component {
  constructor() {
    super();

    this.numberOfTask = 0;

    this.DeleteTask = this.DeleteTask.bind(this);
    this.MarkDoneTask = this.MarkDoneTask.bind(this);
    this.CreateTask = this.CreateTask.bind(this);
    this.GetAllTask = this.GetAllTask.bind(this);
    this.GetActiveTask = this.GetActiveTask.bind(this);
    this.GetCompletedTask = this.GetCompletedTask.bind(this);

    this.state = {
      tasks: [
        { id: 1, desc: "Something1", completed: false, created_at: 123456 },
        { id: 2, desc: "Something2", completed: false, created_at: 123456 },
        { id: 3, desc: "Something3", completed: false, created_at: 123456 },
      ],
      input: "",
      // new variable to save current filter state
      filterState: 'all'
    };
    
  }
  // Deletes the task when the user clicks the "X" button.
  DeleteTask(id) {
    let filteredTasks = this.state.tasks.filter((tasks) => tasks.id != id);
    this.setState({
      tasks: filteredTasks,
    });
  }
  CreateTask() {
    this.setState({});
  }
  // Mark the task complete when the user clicks the radio "O" button.
  MarkDoneTask(id) {
    let mapTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    this.setState({
      tasks: mapTasks,
    });
  }

  GetAllTask() {
    this.setState({
      filterState: 'all',
      })
  }
  GetActiveTask() {
    this.setState({
      filterState: 'active',
      })
    // this.filteredTasks = this.state.tasks.filter(
    //   (tasks) => tasks.completed === false
    // );

  
  }
  GetCompletedTask() {
    this.setState({
    filterState: 'completed',
    })
    // this.filteredTasks = this.state.tasks.filter(
    //   (tasks) => tasks.completed === true
    // );
    // return this.filteredTasks;
  }
  render() {
    const mapHelper = (task, index) => {
      return (
        <Task
          task={task}
          index={index}
          MarkDoneTask={this.MarkDoneTask}
          DeleteTask={this.DeleteTask}
          key={index}
        />
      );
    };
    // Filter helper function.
    const filterHelper = (item) => {
      console.log(item);
      // check what to filter based on filter state (if statement)
      if(this.state.filterState === "all"){

        return item;
        
      }
      if(this.state.filterState === "active"){
        return item.completed === false;

      }
      if(this.state.filterState === 'completed'){
        return item.completed === true; 

      }
    };
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm">
              <h1>To-dos!</h1>
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <input
                      {...function clickCreateTask() {
                        this.CreateTask(); /// This where I left off.
                      }}
                      placeholder="What needs to be done?"
                      value={this.input}
                      onChange={this.CreateTask}
                    ></input>
                  </li>
                  {this.state.tasks.filter(filterHelper).map(mapHelper)}
                </ul>
                <div className="card-footer">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm"></div>
                      <div className="col-sm"></div>
                      {this.numberOfTask} items left
                      <button onClick={this.GetAllTask}>All</button>
                      <button onClick={this.GetActiveTask}>Active</button>
                      <button onClick={this.GetCompletedTask}>Completed</button>
                      <div className="col-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
