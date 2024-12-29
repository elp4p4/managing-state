import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onComplete, onDelete, onEdit }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;
