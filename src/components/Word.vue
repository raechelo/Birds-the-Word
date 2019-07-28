<template>
  <div class="indiv-word">
    <span @click="$emit('search-word', word)">{{word}}</span>
  </div>
</template>

<script>

export default {
  name: 'Word',
  props: ['word']
}
</script>

<style>
.indiv-word {
  border: 2px solid black;
  margin: 1rem;
  padding: .5rem;
}

.indiv-word:hover {
  cursor: pointer;
  background-color: hsla(0, 0%, 100%, 0.65);
  text-decoration: underline;
}
</style>
