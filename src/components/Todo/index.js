import React from "react";
import "./index.css";
import Axios from "axios";

export default function Todo(props) {
  const deleteTask = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await Axios.delete("http://192.168.0.53:3001/tasks", {
        data: { id: props.taskId },
      });
      props.refreshCallback();
    }
  };
  return (
    <div className="todo">
      <div className="todo-info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <button className="btn btn-danger" onClick={deleteTask}>
        DELETE
      </button>
    </div>
  );
}
