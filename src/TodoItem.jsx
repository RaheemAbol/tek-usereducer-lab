import React, { useState } from "react";
import { actionTypes } from "./todoReducer";

const TodoItem = ({ todo, dispatch }) => {
  const [isEditing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => setEditing(true);

  const handleSave = () => {
    dispatch({ type: actionTypes.EDIT_TODO, id: todo.id, text: editText });
    setEditing(false);
  };

  const handleDelete = () =>
    dispatch({ type: actionTypes.DELETE_TODO, id: todo.id });

  const handleToggle = () =>
    dispatch({ type: actionTypes.TOGGLE_TODO, id: todo.id });

  return isEditing ? (
    <>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </>
  ) : (
    <>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <label>{todo.text}</label>
      <button disabled={!todo.completed} onClick={handleDelete}>
        Delete
      </button>
      <button onClick={handleEdit}>Edit</button>
    </>
  );
};

export default TodoItem;
