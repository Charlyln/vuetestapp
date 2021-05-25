<template>
  <v-container>
    <!-- <v-row>
      <v-col cols="12" sm="4">
        <h1>Add a task</h1>
        <TaskForm />
      </v-col>
      <v-col cols="12" sm="4">
        <h1>Not completed</h1>
        <TaskCard
          v-for="todo in notCompletedTodos"
          :key="todo.id"
          :todo="todo"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <h1>Completed</h1>
        <TaskCard v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
      </v-col>
    </v-row> -->
    <v-row>
      <Select
        :items="outputsList"
        placeholder="Outputs"
        :onChange="onChangeOutput"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import TaskCard from "./TaskCard.vue";
// import TaskForm from "./TaskForm";
import Select from "./Select";
import types from "./outputs/types";
import { outputsItems } from "./outputs/constants";

export default {
  components: { Select },
  name: "Dashboard",
  data: () => {
    return {
      outputsItems,
    };
  },
  computed: {
    ...mapGetters({
      getOuputs: "getOuputs",
    }),

    outputsList() {
      return this.outputsItems.map((output) => output.value);
    },
    // completedTodos() {
    //   const completedTodos = this.todos.filter((todo) => todo.completed);
    //   return completedTodos;
    // },
    // notCompletedTodos() {
    //   const completedTodos = this.todos.filter((todo) => !todo.completed);
    //   return completedTodos;
    // },
  },
  methods: {
    ...mapActions({
      updateOutput: types.UPDATE_OUTPUT,
    }),

    onChangeOutput(value) {
      console.log(types.UPDATE_OUTPUT);
      this.updateOutput({ value, id: this.id });
    },
  },
};
</script>

<style scoped></style>
