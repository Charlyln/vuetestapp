<template>
  <v-container>
    <v-row>
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
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import TaskCard from "./TaskCard.vue";
import TaskForm from "./TaskForm";
import { listOfTodos } from "../store/constants";

export default {
  components: { TaskCard, TaskForm },
  name: "Dashboard",
  data: () => {
    return {
      listOfTodos,
    };
  },

  mounted: () => {
    console.log(listOfTodos);
  },
  computed: {
    ...mapGetters({
      getOuputs: "getOuputs",
    }),
    outputsList() {
      return this.listOfTodos.map((output) => output.value);
    },
    completedTodos() {
      const completedTodos = this.listOfTodos.filter((todo) => todo.completed);
      return completedTodos;
    },
    notCompletedTodos() {
      const completedTodos = this.listOfTodos.filter((todo) => !todo.completed);
      return completedTodos;
    },
  },
};
</script>

<style scoped></style>
