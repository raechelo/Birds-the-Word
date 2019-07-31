<template>
  <div id="app">
    <Header />
    <Form v-on:search-word="searchWord" />
    <SearchedWord v-bind:word="searchedWord" />
    <!-- <Results v-bind:words="words" v-on:search-word="searchWord" />
      <div> -->
    <div v-for="word in words" v-bind:key="word.uuid" class="results">
      <Word v-on:search-word="searchWord" v-bind:word="word" />
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Form from './components/Form.vue';
import SearchedWord from './components/SearchedWord.vue';
import Word from './components/Word.vue';
import uuid from 'uuid';

export default {
  name: 'app',
  components: {
    Header,
    Form,
    SearchedWord,
    Word
  },
  data() {
    return {
      searchedWord: '',
      words: []
    }
  },
  props: ['word'],
  methods: {
    searchWord(word) {
      console.log(typeof word)
      typeof word === 'object' ? word = word.word : word = word
      this.searchedWord = word

      fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${thesaurus_key}`)
        .then(res => res.json())
        .then(res => this.words = res)
        .then(res => this.addId())
        .catch(err => console.log(err))
    },
    addId() {
      this.words = this.words.map(word => {
        return {
          word: word.hwi.hw,
          def: word.shortdef,
          type: word.fl,
          syns: word.meta.syns.flat().map(syn => {
           return {
              word: syn,
              id: uuid.v4()
            }
          })
        }
      })
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
