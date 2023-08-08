import { randomTodos } from "@/mocks/todoList";


export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_POST": 
        return ;
      case "REMOVE_POST":
        return ;
      case "MODIFY_POST":
        return ;
      case "GET_POSTS":
        return ;
      case "RANDOM_POST":
        return ;
      case "GET_BLOGS":
          return ;
      default:
        console.log(state);
        return state;
    }
  };

  export const loginReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": 
      console.log(action.payload)
        return {
          ...state,
          username: action.payload,
        };
      default:
        console.log(state);
        return state;
    }
  }
