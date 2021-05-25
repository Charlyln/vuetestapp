import { listOfTodos } from "./constants";

export default {
  state: {
    listOfTodos,
  },
  mutations: {
    ADD_TODO: (state, payload) => {
      const id = state.listOfTodos.length + 1;
      const newTask = {
        id,
        title: payload.title,
        content: payload.content,
        completed: false,
      };
      state.listOfTodos.unshift(newTask);
    },
    TOGGLE_TODO: (state, payload) => {
      const item = state.listOfTodos.find((todo) => todo.id === payload);
      item.completed = !item.completed;
    },
    DELETE_TODO: (state, payload) => {
      const index = state.listOfTodos.findIndex((todo) => todo.id === payload);
      state.listOfTodos.splice(index, 1);
    },
    UPDATE_OUTPUT: (state, newState) => {
      state.listOfTodos = newState;
    },
  },
  getters: {
    getOuputs: (state) => {
      const todos = [...state.listOfTodos];

      return todos.map((output) => output.value);
    },
  },
};
