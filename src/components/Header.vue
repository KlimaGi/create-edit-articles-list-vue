<template>
  <header>
    <h1 class="mx-5 mt-2 py-3" v-show="homePage">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
  components: {},
  computed: {
    homePage() {
      return this.$route.path === "/";
    },
  },
};
</script>

<style scoped lang="scss">
$color: #553b55;
$pseudo-white: #f3eff2;

header {
  color: $color;
  background-image: linear-gradient(300deg, $color 0%, $pseudo-white 94%);
}
</style>
