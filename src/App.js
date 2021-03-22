import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "@testing-library/react";
import List from "./component/List";

// Parent
function App() {
  let tasks = ["task one", "task two", "task three"];
  let numberOfTask = tasks.length;

  return (
    
    <div className="App">
      <List tasks={tasks} numberOfTask={numberOfTask} />
    </div>
  );

  function DeleteTask(props) {}
  function CreateTask(props) {}
  function MarkDoneTask(props) {}

  
}

export default App;
