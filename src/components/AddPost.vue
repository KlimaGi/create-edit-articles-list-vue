<template>
  <form class="form-control d-grid gap-3" @submit="onSubmit">
    <input
      class="form-control p-2 mt-3 bg-light border"
      type="text"
      v-model="title"
      name="title"
      placeholder="Post Title"
    />

    <label for="userId"></label>
    <input
      class="form-control p-2 bg-light border"
      type="text"
      v-model="userId"
      name="userId"
      placeholder="Username"
    />

    <label for="body"></label>
    <textarea
      class="form-control p-2 bg-light border"
      type="text"
      v-model="body"
      name="body"
      placeholder="Text"
    />
    <div class="mb-3 d-grid gap-2">
      <input type="submit" value="Save Post" class="btn btn-color" />
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPost",
  data() {
    return {
      title: "",
      userId: "",
      body: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.title || !this.userId || !this.body) {
        alert("Please add the text, all areas are important.");
        return;
      }

      const newPost = {
        title: this.title,
        userId: this.userId,
        body: this.body,
      };

      axios.post("https://jsonplaceholder.typicode.com/posts/create", newPost);

      this.title = "";
      this.userId = "";
      this.body = "";
    },
  },
};
</script>

<style scoped lang="scss">
$color: #442344;
$pseudo-white: #f3eff2;
.btn-color {
  color: $pseudo-white;
  background-color: $color;
}
textarea {
  height: 15rem !important;
}
</style>
