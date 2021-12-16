import * as types from "./actiontype";

const initialState = {
  todos: [
    { id: 1, task: "Go to dentist", completed: false },
    { id: 2, task: "Buy groceries", completed: false },
    { id: 3, task: "Get medicines", completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodo = {
        id: Date(),
        task: action.payload,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };

    case types.REMOVE_TODO:
      const delTodo = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: delTodo,
      };

    case types.UPDATE_TODO:
      const upTodo = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.upTask };
        }
        return todo;
      });
      return { ...state, todos: upTodo };

    case types.COMPLETE_TODO:
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : t
      );
      return {
        ...state,
        todos: toggleTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
