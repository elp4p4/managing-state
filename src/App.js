import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import "./App.css";

function App() {
  // Lazy initialization to load tasks directly from localStorage
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    // Save tasks to localStorage whenever tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setTaskToEdit(null); // Reset the editing state
  };

  const deleteTask = (taskToDelete) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
    }
  };

  const toggleTaskCompletion = (taskToToggle) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskToToggle.id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", marginBottom: "90px" }}>My To-Do List</h1>
      <div style={{
        backgroundColor: "rgb(255, 255, 255)",
        padding: "40px 20px",
        borderRadius: "10px",
        boxShadow: "20px 20px 20px 20px rgba(0,0,0,0.2)"
      }}>
        <TaskForm
          onSave={taskToEdit ? updateTask : addTask}
          taskToEdit={taskToEdit}
        />
        <TaskList
          tasks={tasks}
          onComplete={toggleTaskCompletion}
          onDelete={deleteTask}
          onEdit={setTaskToEdit}
        />
      </div>
    </div>
  );
}

export default App;
