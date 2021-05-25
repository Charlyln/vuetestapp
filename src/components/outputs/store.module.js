import types from "./types";
import { listOfOutputs } from "./constants";

export default {
  state: {
    listOfOutputs,
  },
  mutations: {
    [types.ADD_TODO]: (state, payload) => {
      const id = state.listOfOutputs.length + 1;
      const newTask = {
        id,
        title: payload.title,
        content: payload.content,
        completed: false,
      };
      state.listOfOutputs.unshift(newTask);
    },
    [types.TOGGLE_TODO]: (state, payload) => {
      const item = state.listOfOutputs.find((todo) => todo.id === payload);
      item.completed = !item.completed;
    },
    [types.DELETE_TODO]: (state, payload) => {
      const index = state.listOfOutputs.findIndex(
        (todo) => todo.id === payload
      );
      state.listOfOutputs.splice(index, 1);
    },
    [types.UPDATE_OUTPUT]: (state, newState) => {
     state.listOfOutputs = newState
    },
  },
  getters: {
    getOuputs: (state) => {
      const outputs = [...state.listOfOutputs];

      return outputs.map((output) => output.value);
    },
  },
};
