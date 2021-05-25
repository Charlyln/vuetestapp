<template>
  <div class="text-center">
    <v-btn color="red lighten-2" dark v-on="dialogOpen"> Click Me </v-btn>
      <v-card>
        <v-card-text>
          <v-container>
            <TaskForm />
          </v-container>
        </v-card-text>
      </v-card>
   
  </div>
</template>

<script>
import TaskForm from "./TaskForm.vue";
export default {
  components: { TaskForm },
  computed: {
    dialogOpen() {
      return this.$store.state.dialogOpen;
    },
  },
  methods: {
    toggleDialog: function () {
      this.$store.commit("toggleDialog");
    },
  },
};
</script>

<style scoped>
.button {
  margin-left: auto;
}
</style>
