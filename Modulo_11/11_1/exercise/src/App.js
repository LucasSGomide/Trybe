import React from 'react';
import './App.css';
import task from './task';

const tasksArr = ['Tarefa1', 'Tarefa2', 'Tarefa3', 'Tarefa4', 'Tarefa5'];

function App() {
  return (
    <ol>
      {task(tasksArr)}
    </ol>
    
  );
}

export default App;
