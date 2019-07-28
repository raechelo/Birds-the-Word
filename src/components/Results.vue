<template>
  <div>
    <div v-for="word in words" v-bind:key="word.uuid">
      <Word v-bind:word="word" />
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
