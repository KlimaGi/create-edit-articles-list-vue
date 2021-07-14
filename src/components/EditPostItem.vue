<template>
  <div class="form-control d-grid gap-3 ">
    <form @submit.prevent="onSubmit">
      <input
        class="form-control 
        p-2 mt-3 bg-light border"
        type="text"
        v-model="title"
      />
      <textarea class="form-control p-2 my-3 bg-light border" v-model="body" />
      <div class="mb-3 d-grid gap-2">
        <button class="btn btn-color" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  created() {
    this.title = this.post.title;
    this.body = this.post.body;
  },
  methods: {
    onSubmit() {
      const editedPost = { title: this.title, body: this.body };
      this.$emit("submit-post", editedPost);
    },
  },
};
</script>

<style scoped lang="scss">
$color: #553b55;
$color-light: #9c269c;
$pseudo-white: #f3eff2;

.btn-color {
  color: $pseudo-white;
  background-color: $color;
}
textarea {
  height: 15rem !important;
}
</style>
