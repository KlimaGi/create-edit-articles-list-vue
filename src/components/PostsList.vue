<template>
  <div :key="post.id" v-for="post in posts">
    <PostItem :post="post" />
  </div>
</template>

<script>
import PostItem from "./PostItem";
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    PostItem,
  },

  async created() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.posts = response.data;
  },
};
</script>
