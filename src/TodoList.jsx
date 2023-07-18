import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, dispatch }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
        <TodoItem todo={todo} dispatch={dispatch} />
      </li>
    ))}
  </ul>
);

export default TodoList;
