import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./component/Task";
import React from "react";

// Parent
class App extends React.Component {
  constructor() {
    super();

    this.DeleteTask = this.DeleteTask.bind(this);
    this.MarkDoneTask = this.MarkDoneTask.bind(this);
    this.GetAllTask = this.GetAllTask.bind(this);
    this.GetActiveTask = this.GetActiveTask.bind(this);
    this.GetCompletedTask = this.GetCompletedTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      tasks: [],
      input: "",
      // new variable to save current filter state
      filterState: "all",

      numberOfTask: 0,
    };
  }
  // Deletes the task when the user clicks the "X" button.
  DeleteTask(id) {
    let filteredTasks = this.state.tasks.filter((tasks) => tasks.id != id);
    this.setState({
      tasks: filteredTasks,
      numberOfTask: this.state.numberOfTask - 1,
    });
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
      filterState: "all",
    });
  }
  GetActiveTask() {
    this.setState({
      filterState: "active",
    });
  }
  GetCompletedTask() {
    this.setState({
      filterState: "completed",
    });
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  handleSubmit(event) {
    let newObject = {
      // Change this to not look at task length.
      id: Date.now(),
      desc: this.state.input,
      completed: false,
      created_at: Date.now(),
    };
    console.log(this.state.numberOfTask);

    this.setState({
      tasks: [...this.state.tasks, newObject],
      input: "",
      numberOfTask: this.state.numberOfTask + 1,
    });

    event.preventDefault();
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
      if (this.state.filterState === "all") {
        return item;
      }
      if (this.state.filterState === "active") {
        return item.completed === false;
      }
      if (this.state.filterState === "completed") {
        return item.completed === true;
      }
    };
    return (
      <div className='whole'>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm">
                <h1>To-dos!</h1>
                <div className="thisCard">
                <div className="card">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <form onSubmit={this.handleSubmit}>
                        <input
                          placeholder="What needs to be done?"
                          value={this.state.input}
                          onChange={this.handleChange}
                        ></input>
                      </form>
                    </li>
                    {this.state.tasks.filter(filterHelper).map(mapHelper)}
                  </ul>
                  <div className="card-footer">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm"></div>
                        <div className='item'>
                        {this.state.numberOfTask} items left
                        </div>
                        <div className="taskButtons">
                        <button onClick={this.GetAllTask}>All</button>
                        <button onClick={this.GetActiveTask}>Active</button>
                        <button onClick={this.GetCompletedTask}>
                          Completed
                        </button>
                        </div>
                        </div>
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
      </div>
    );
  }
}
export default App;
