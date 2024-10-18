import React, { useState, useEffect } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', completed: false });
  const [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editTaskId) {
      await updateTask(editTaskId, newTask);
    } else {
      await addTask(newTask);
    }
    setNewTask({ title: '', description: '', completed: false });
    setEditTaskId(null);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setNewTask(task);
    setEditTaskId(task.id);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task Management System</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              value={newTask.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              value={newTask.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="completed"
                checked={newTask.completed}
                onChange={() => setNewTask({ ...newTask, completed: !newTask.completed })}
              />
              <label className="form-check-label">Completed</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {editTaskId ? 'Update Task' : 'Add Task'}
        </button>
      </form>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.completed ? 'Yes' : 'No'}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleEdit(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;