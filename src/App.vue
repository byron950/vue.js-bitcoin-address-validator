<template>
  <the-header></the-header>
  <check-address></check-address>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import CheckAddress from "./components/functionality/CheckAddress.vue";

export default {
  components: {
    TheHeader,
    CheckAddress,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');


body {
  margin: 0;
}

html {
  font-family: 'Open Sans', sans-serif;
}
</style>