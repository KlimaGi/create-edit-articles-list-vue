<template>
  <h2 class="my-3 p-3">Create Post</h2>
  <AddPost />
</template>

<script>
import AddPost from "../components/AddPost.vue";

export default {
  components: {
    AddPost,
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
