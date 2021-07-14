<template>
  <PostsList />
</template>

<script>
import PostsList from "../components/PostsList";
import AddPost from "../components/AddPost";
export default {
  name: "Home",
  props: {},
  components: {
    PostsList,
    AddPost,
  },
};
</script>
