import React, { useState } from 'react';
import axios from 'axios';

function AddTask({ fetchTasks }) {
    const [title, setTitle] = useState('');

    const addTask = async () => {
        if (title.trim()) {
            await axios.post('http://localhost:8080/api/tasks', { title, completed: false });
            setTitle('');
            fetchTasks();
        }
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task..."
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default AddTask;