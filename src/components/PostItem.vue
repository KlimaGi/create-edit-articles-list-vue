<template>
  <div class="mx-1">
    <router-link :to="{ name: 'Post', params: { id: post.id } }">
      <div class="post my-2 p-5">
        <h4>
          {{ post.title }}
        </h4>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style scoped lang="scss">
$color: #442344;
$color-light: #9c269c;
$pseudo-white: #f3eff2;

.post {
  background: #f3eff2;
  color: $color;
  cursor: pointer;
}
a {
  text-decoration: none;
}
a:hover {
  color: $color-light;
}
.post h4 {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
