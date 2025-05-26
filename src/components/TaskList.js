import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await axios.get('http://localhost:8080/api/tasks');
        setTasks(res.data);
    };

    const toggleComplete = async (id, completed) => {
        await axios.put(`http://localhost:8080/api/tasks/${id}`, { completed: !completed });
        fetchTasks();
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:8080/api/tasks/${id}`);
        fetchTasks();
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(task.id, task.completed)}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.title}
                    </span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;