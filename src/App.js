//================================APP====================================================================================
import "./App.css";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Only one chile component will be import: Task
import Task from "./component/Task";
import React from "react";

/*
  Parent
  App will Return: --------
                          | 
                          |
                          CARD------------- Button: "All" , Button: "Active", Button: "Completed", String: numberOfTask
                                    |
                                    |
                                    Child
                                    Task 1 , Task 2, Task 3 .......... Task (n)
                                    |
                                    |
                                    |
                                    Within Task will Return: ---------
                                                              |
                                                              |
                                                              Task: {ID, Desc, Completed, Created_at}, Button: MarkButton, Button: Delete
*/
// Parent
class App extends React.Component {
  constructor() {
    super();
    //================================Binding===============================================================================
    this.DeleteTask = this.DeleteTask.bind(this);
    this.MarkDoneTask = this.MarkDoneTask.bind(this);
    this.GetAllTask = this.GetAllTask.bind(this);
    this.GetActiveTask = this.GetActiveTask.bind(this);
    this.GetCompletedTask = this.GetCompletedTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //=======================================================================================================================
    this.state = {
      // This is were the tasks will be saved.
      tasks: [],
      // store user input
      input: "",
      // new variable to save current filter state
      filterState: "all",
      // This will store the number of task.
      numberOfTask: 0,
    };
  }
  //========================================= Dealing with user input===================================================
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
    // Storing the status of "completed"
    this.setState({
      tasks: mapTasks,
    });
  }
  // Changing the filter state to "all"
  GetAllTask() {
    this.setState({
      filterState: "all",
    });
  }
  // Changing the filter state to "active"
  GetActiveTask() {
    this.setState({
      filterState: "active",
    });
  }
  // Changing the filter state to "completed"
  GetCompletedTask() {
    this.setState({
      filterState: "completed",
    });
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  // Creates a new task for the user and will be store a new object in task.
  handleSubmit(event) {
    let newObject = {
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
  //========================================== Local Storage Management===================================================
  componentDidMount() {
    let previousList = window.localStorage.getItem("tasks");
    if (previousList) {
      this.setState({
        tasks: JSON.parse(previousList),
      });
    }
  }
  componentDidUpdate() {
    window.localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }
  // This will render the list
  render() {
    // mapHelper will be stored in variable to be user in a helper function.
    const mapHelper = (task, index) => {
      return (
        // From "Task" component
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
      /*
      These if statement will check if the task are active or completed
      base on the object's "filterState" status. 
      */
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
//============================================== The TO-DO list card================================================
    // Return the card component.
    return (
      <div className="whole">
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
                          <div className="item">
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
