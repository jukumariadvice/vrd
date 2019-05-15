<template>
  <div id="app">
    <Header/>
    <!--<div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<script>
import Header from "@/shared/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
//#app {}
</style>
