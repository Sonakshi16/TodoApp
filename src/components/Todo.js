import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ id, task, completed, toggleTodo, deleteTodo, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleUpdate = (e) => {
    e.preventDefault();
    editTodo(id, editTask);
    setIsEdit(false);
  }
  return (
    <div className={completed ? "Todo completed" : "Todo"}>
      {isEdit ? (
        <div key="editing" timeout={500}>
          <form onSubmit={handleUpdate} className="todo-edit">
            <input
              type="text"
              name="task"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <button>UPDATE</button>
          </form>
        </div>
      ) : (
        <div key="normal" timeout={500}>
          <li className="Todo-task" onClick={toggleTodo}>
            {task}
          </li>
        </div>
      )}

      <div className="Todo-buttons">
      <button onClick={() => setIsEdit(true)}>
          <i className="fas fa-pen" />
        </button>
        <button onClick={deleteTodo}>
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
