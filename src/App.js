import React, { useReducer, useState } from "react";
import TodoList from "./TodoList";
import { actionTypes, reducer } from "./todoReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    dispatch({ type: actionTypes.ADD_TODO, text });
    setText("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
