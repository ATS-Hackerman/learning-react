import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(['Clean room','Buy groceries'])
  return (
    <>
      <TodoList todos = {todos} />
      <input type="text" />
      <button>Add item</button>
      <button>Clear item</button>
      <div>0 left to do</div> 
    </>
  )
}

export default App;