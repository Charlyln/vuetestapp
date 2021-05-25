<template>
  <v-card class="task" max-width="344">
    <v-card-text>
      <div>{{ todo.title }}</div>
      <div class="text--primary">
        {{ todo.content }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="deleteTodo(todo.id)" text color="deep-purple accent-4">
        delete
      </v-btn>
      <v-btn
        @click="toggleTodo(todo.id)"
        :text="todo.completed ? true : false"
        color="secondary"
      >
        {{ todo.completed ? "undo" : "done" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    toggleTodo: function (id) {
      this.$store.commit("outputs/TOGGLE_TODO", id);
    },
    deleteTodo: function (id) {
      this.$store.commit("outputs/DELETE_TODO", id);
    },
  },
};
</script>

<style scoped>
.task {
  margin-bottom: 15px;
}
</style>
