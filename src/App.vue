<template>
  <div class="container">
    <router-link to="/create-post">Create Post</router-link>
    <Header title="Our Articles" />

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300&display=swap");
$color: #442344;
$color-light: #9c269c;

* {
  box-sizing: border-box;
  font-family: "Kiwi Maru", serif !important;
}

a {
  color: $color;
  text-decoration: none;
  border-bottom: 1px solid $color;
}
a:hover {
  color: $color-light;
}

.container {
  max-width: 80%;
  margin: 2rem auto;
  overflow: auto;
  min-height: 300px;
}
</style>
