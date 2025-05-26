import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const [refresh, setRefresh] = useState(false);

  const fetchTasks = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask fetchTasks={fetchTasks} />
      <TaskList />
    </div>
  );
}

export default App;
