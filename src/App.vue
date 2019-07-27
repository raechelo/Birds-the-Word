<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-image: linear-gradient(hsla(0, 0%, 100%, 0.20) hsla(0, 0%, 100%, 0.4)), url('./assets/wallpaper.jpeg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
}

#app {
  font-family: 'Roboto Slab', serif;
  text-align: center;
}
</style>
