<template>
  <div>
    <div v-for="word in words" v-bind:key="word.uuid">
      <Word v-bind:word="word" />
  </div>
</template>

<script>
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
