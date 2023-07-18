export const actionTypes = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  EDIT_TODO: "EDIT_TODO",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        { id: Date.now(), text: action.text, completed: false },
        ...state,
      ];
    case actionTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case actionTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case actionTypes.EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    default:
      return state;
  }
};
