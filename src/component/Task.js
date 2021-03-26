
import React from 'react';

// Child
function Task(props){
    // Helper function
    function clickDelete() {
        props.DeleteTask(props.task.id);
      }

      function clickComplete() {
        props.MarkDoneTask(props.task.id);
      }

      // Turn props.this into a component
      return (
        <li key={props.index} className="list-group-item">
         {/* Button: for the user to mark there task done */}
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
          {props.task.desc}
          {/* Allow the user to delete their task. */}
          <button className='markButton' onClick={clickDelete}>
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
}
export default Task;