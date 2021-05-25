<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <v-form @submit="submitForm">
        <v-text-field
          @input="handleChangeTitle"
          :value="title"
          v-model="title"
          label="Title"
          required
        ></v-text-field>

        <v-text-field
          v-model="content"
          :value="content"
          @input="handleChangeContent"
          label="Content"
          required
        ></v-text-field>

        <v-btn type="submit" text color="deep-purple accent-4"> submit </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    title: "",
    content: "",
  }),
  methods: {
    handleChangeTitle(value) {
      this.title = value;
    },
    handleChangeContent(value) {
      this.content = value;
    },
    submitForm: function (e) {
      e.preventDefault();

      if (this.title.length > 0 && this.content.length > 0) {
        const payload = {
          title: this.title,
          content: this.content,
        };
        this.$store.commit("outputs/ADD_TODO", payload);
        this.title = "";
        this.content = "";
      }
    },
  },
};
</script>
