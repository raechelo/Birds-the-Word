<template>
  <span class="syns">
    <span class="syn" @click="$emit('search-word', synonym.word)">{{synonym.word}}</span>
  </span>

</template>

<script>

export default {
  name: 'Synonyms',
  props: ['synonym']
}

</script>

<style scoped>

.syns {
  display: inline-block;
}

.syn {
  border: 2px solid black;
  display: inline-block;
  margin: .5rem;
  padding: .5rem;
  text-transform: lowercase;
}

.syn:hover {
  background-color: hsla(0, 0%, 100%, 0.65);
  cursor: pointer;
  text-decoration: underline;
}

</style>
