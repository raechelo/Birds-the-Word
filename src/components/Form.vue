<template>
  <form class="Form" @submit="searchWord" >
    <input type="text" name="word" placeholder="find synonyms..." class="form-input" v-model="word" />
    <input type="submit" class="form-submit">
    <p>{{ word }}</p>
  </form>
</template>

<script>

export default {
  name: 'Form',
  data: {
    word: ''
  },
  methods: {
    searchWord(e) {
      e.preventDefault();
      this.$emit('search-word', this.word)
    }
  }
}

</script>

<style scoped>

.Form {
  margin: 2rem auto;
  text-align: center;
}

.form-input {
  border: 2px solid black;
  height: 2rem;
  padding-left: 5px;
  text-align: left;
  font-size: 1.5rem;
}

.form-submit {
  background-color: transparent;
  border: 2px solid black;
  border-radius: 5%;
  font-size: 1.4rem;
  height: 2rem;
  margin-left: .5rem;
  padding: 1px;
  width: 8rem;
}

.form-submit:hover {
  background-color: hsla(0, 0%, 100%, 0.65);
  cursor: pointer;
  text-decoration: underline;
}
</style>
