import React from 'react';

function TaskItem({ task, onComplete, onDelete, onEdit }) {
  return (
<div className={`task-item ${task.completed ? 'completed' : ''}`} style={{ overflow: "hidden", wordWrap: "break-word" }}>
  <h3 style={{ display: "flex", justifyContent: "center" }} onClick={() => onEdit(task)}>{task.name}</h3>
  <p style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{task.description}</p>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <button style={{ backgroundColor: "rgb(0, 255, 42)" }} onClick={() => onComplete(task)}>
      {task.completed ? 'Undone' : 'Done'}
    </button>
    <button style={{ backgroundColor: "rgb(255, 21, 21)" }} onClick={() => onDelete(task)}>Delete</button>
  </div>
</div>

  );
}

export default TaskItem;
