<template>
  <div id="app">
    <Header />
    <Form v-on:search-word="searchWord" />
    <Results v-bind:words="words" v-on:search-word="searchWord" />
    <Footer />
  </div>
</template>

<script>
import key from './apiKey';
import Header from './components/layout/Header.vue';
import Form from './components/Form.vue';
import Results from './components/Results.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Form,
    Results,
    Footer
  },
  data() {
    return {
      words: []
    }
  },
  methods: {
    searchWord(word) {
      fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${key}`)
        .then(res => res.json())
        .then(res => res[0].meta)
        // return id back with words so that we can use those ids
        // or npm install uuid and use those for keys
        .then(res => this.words = res.syns.flat().sort())
        // if i want to include a def, i will need to rethink the wy the data is fetched and returned as far as how i am parsing and pushing the data into state.
        // defs available at res[0].shortdef
        .catch(err => console.log(err))
    }
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
  background-color: hsl(200, 49%, 82%);
  background-image: url('./assets/birds.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
}

#app {
  font-family: 'Roboto Slab', serif;
  padding: 1rem;
  text-align: center;
}
</style>
