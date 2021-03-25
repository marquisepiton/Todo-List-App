/*
This is a dummy file. 


*/


import React from 'react';

// Child
function List(props) {
  return (
    <React.Fragment>
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
                      props.CreateTask(); /// This where I left off.
                    }}
                    placeholder="What needs to be done?"
                    value={props.input}
                    onChange={props.CreateTask}
                  ></input>
                </li>

                {props.tasks.map((task, index) => {
                  function clickDelete() {
                    props.DeleteTask(task.id);
                  }

                  function clickComplete() {
                    props.MarkDoneTask(task.id);
                  }
                  // Turn this into a component
                  return (
                    <li key={index} className="list-group-item">
                      <input
                        id="task"
                        className="form-check-input"
                        type="radio"
                        name="radioNoLabel"
                        id="radioNoLabel1"
                        value=""
                        aria-label="..."
                        onClick={clickComplete}
                      ></input>
                      {task.desc}
                      <button onClick={clickDelete}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="card-footer">
                <div className="container">
                  <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                    {props.numberOfTask} items left
                    <button onClick={props.GetAllTask}>All</button>
                    <button onClick={props.GetActiveTask}>Active</button>
                    <button onClick={props.GetCompletedTask}>Completed</button>
                    <div className="col-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default List;
