import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from '../actions';

const initialState = {
    todos: [
      {
        text: 'wash car',
        completed: false,
        id: 0
      }
    ],
    name: 'jay'
  };
  

  export const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return Object.assign({}, state, {
          todos: [...state.todos, action.payload]
        });
      case COMPLETE_TODO:
        const id = action.payload;
        const todos = state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
            return todo;
          } else {
            return todo;
          }
        });
        return Object.assign({}, state, { todos: todos });
      default:
        return state;
    }
  };

