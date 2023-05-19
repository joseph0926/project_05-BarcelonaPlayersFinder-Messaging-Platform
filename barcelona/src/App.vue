<template>
  <TheNavbar />
  <RouterView></RouterView>
</template>

<script>
import TheNavbar from "./components/layouts/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
