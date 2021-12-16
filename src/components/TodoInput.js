import React, { useState } from 'react';
import './TodoInput.css';

const TodoInput = ({ createTodo }) => {
    const [task, setTask] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(task);
        setTask("");
    };
    return (
        <form onSubmit={handleSubmit} className="TodoInput">
            <input
            className="TodoInput"
            type = "text"
            placeholder="Task"
            id="task"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button className="TodoInput">ADD TASK</button>
        </form>
    );
};

export default TodoInput;