import Task from "./Task";
import React from "react";
function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks && tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}
export default TaskList