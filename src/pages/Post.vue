<template>
  <template v-if="post">
    <router-link
      :to="{ name: 'Edit Post', params: { id } }"
      class="float-end m-2 p-2"
      >Edit post</router-link
    >
    <h2 class="p-4 my-2">{{ post.title }}</h2>
    <p class="my-5">{{ post.body }}</p>
  </template>
  <div v-else>Loading</div>
  <CommentInput @submit-comment="addComment" />
  <CommentList :comments="comments" />
</template>

<script>
import axios from "axios";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";

export default {
  components: {
    CommentInput,
    CommentList,
  },
  props: ["id"],
  data() {
    return {
      post: null,
      comments: [],
    };
  },
  async created() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.id}`
    );
    this.post = response.data;
  },
  methods: {
    addComment(comment) {
      // Submit to API
      axios.post(
        `https://jsonplaceholder.typicode.com/posts/${this.id}/comment`,
        { comment }
      );
      this.comments.push(comment);
    },
  },
};
</script>

<style scoped lang="scss">
$color: #553b55;
$color-light: #9c269c;
$pseudo-white: #f3eff2;

h2 {
  color: $color;
  background-image: linear-gradient(300deg, $color 0%, $pseudo-white 94%);
}

a {
  color: $color;
  text-decoration: none;
  border-bottom: 1px solid $color;
  background-color: $pseudo-white;
}
a:hover {
  color: $color-light;
}
</style>
