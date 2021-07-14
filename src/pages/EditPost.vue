<template>
  <h2 class="my-3 p-3">Edit Post</h2>
  <template v-if="post">
    <EditPostItem :post="post" @submit-post="updatePost" />
  </template>
  <div v-else>Loading</div>
</template>

<script>
import axios from "axios";
import EditPostItem from "../components/EditPostItem";

export default {
  components: {
    EditPostItem,
  },
  props: ["id"],
  data() {
    return {
      post: null,
    };
  },
  async created() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.id}`
    );
    this.post = response.data;
  },
  methods: {
    updatePost(post) {
      axios.put(`https://jsonplaceholder.typicode.com/posts/${this.id}`, post);
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
</style>
