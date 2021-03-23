import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "@testing-library/react";
import List from "./component/List";
import React from "react";

// Parent
class App extends React.Component{
  
  constructor(){
    super();
    
    //let tasks = ["task one", "task two", "task three"];
    this.numberOfTask = 0;
    this.completedTasks = [];

    this.DeleteTask = this.DeleteTask.bind(this)

    this.state = {

      tasks: [
        {id:1, desc:"Something1", status:1, created_at:123456},
        {id:2, desc:"Something2", status:1, created_at:123456},
        {id:3, desc:"Something3", status:1, created_at:123456},
      ]


    
 
     


    };
  }
  render(){
  return (
    <div className="App">
      <List
        tasks={this.state.tasks}
        numberOfTask={this.numberOfTask}
        CreateTask={this.CreateTask}
        DeleteTask={this.DeleteTask}
        MarkDoneTask={this.MarkDoneTask}
      />
    </div>
  );
  }
  DeleteTask(id) {
    let currentId = id;
    let filteredTasks = this.state.tasks.filter(tasks => tasks.id !== currentId);   
    this.setState({
      tasks: filteredTasks
    });
    
  }
  CreateTask(value) {
   
  }
   MarkDoneTask(props) {
    
  }
  componentDidUpdate(){

  }





}
export default App;