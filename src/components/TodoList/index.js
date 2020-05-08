import React from "react";
import "./index.css";

//Components
import Todo from "../Todo";

export default function TodoList(props) {
  const loadingText = <h2 className="mt-3">Loading...</h2>;
  let renderTasks;

  if (props.tasks.length > 0) {
    renderTasks = props.tasks.map((task, key) => (
      <Todo
        title={task.title}
        description={task.description}
        key={key}
        taskId={task._id}
        refreshCallback={props.refreshCallback}
      />
    ));
  }

  return (
    <div className="todolist">
      <h2 className="tasks-txt">TASKS</h2>
      <div className="todolist-todos">{renderTasks || loadingText}</div>
    </div>
  );
}
