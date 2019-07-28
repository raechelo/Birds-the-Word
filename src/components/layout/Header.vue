<template>
  <header>
    <img src='./../../assets/bird.svg' alt="bird" class="header-bird">
    <img src='./../../assets/flamingo.svg' alt="flamingo" class="header-bird">
    <img src='./../../assets/toucan.svg' alt="toucan" class="header-bird">
    <h1 class="header">Bird is the Word</h1>
    <img src='./../../assets/penguin.svg' alt="penguin" class="header-bird">
    <img src='./../../assets/humming-bird.svg' alt="humming-bird" class="header-bird">
    <img src='./../../assets/owl.svg' alt="owl" class="header-bird">
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

.header {
  display: inline;
  font-family: 'Fascinate', cursive;
  font-size: 2rem;
  margin: 1rem auto;
  text-align: center;
}

.header-bird {
  margin: 0 1rem;
  width: 5%;
}

</style>
