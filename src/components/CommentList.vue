<template>
  <div class="my-3">
    <div v-for="comment in comments" :key="comment">
      <i class="fas fa-feather-alt p-3"></i>{{ comment }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss"></style>
