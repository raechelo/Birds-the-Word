<template>
  <div>
    <div v-for="word in words" v-bind:key="word.uuid" class="results">
      <Word v-bind:word="word" v-on:search-word="$emit('search-word', word)" />
    </div>
  </div>
</template>

<script>
import Word from './Word.vue';

export default {
  name: 'Results',
  components: {
    Word
  },
  props: ['words']
}
</script>

<style scoped>

</style>
