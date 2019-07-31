<template>
  <div class="word">
    <article class="word-info">
      <span @click="$emit('search-word', word)" class="indiv-word">{{word.word}}</span>
      <span class="word-type">[{{word.type}}]</span>
      <span class="word-def">{{word.def[0]}}</span>
    </article>
    <article v-for="synonym in word.syns" v-bind:key="synonym.id" class="word-syns">
      <Synonyms v-bind:synonym="synonym" v-on:search-word="$emit('search-word', synonym.word)" />
    </article>
  </div>
</template>

<script>
import Synonyms from './Synonyms.vue';

export default {
  name: 'Word',
  components: {
    Synonyms
  },
  props: ['word'],
}

</script>

<style>
.word {
  margin: 2rem 1rem;
  padding: .5rem;
}

.word-info {
  display: block;
}

.indiv-word {
  font-weight: 700;
  margin: 1rem;
  padding: .5rem;
}

.indiv-word:hover {
  background-color: hsla(0, 0%, 100%, 0.65);
  cursor: pointer;
  text-decoration: underline;
}

.word-type {
  margin: 0 .5rem;
  font-style: italic;
}

.word-syns {
  display: inline-block;
}

</style>
