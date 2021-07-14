<template>
  <footer class="mt-3">
    <router-link to="/">Home</router-link>
  </footer>
</template>

<style scoped lang="scss">
$color: #442344;
$color-light: #9c269c;
a {
  color: $color;
  text-decoration: none;
  border-bottom: 1px solid $color;
}
a:hover {
  color: $color-light;
}
footer {
  text-align: center;
}
</style>
