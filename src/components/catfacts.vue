<script setup lang="ts">

import axios from 'axios'

default {
  data() {
    return {
      facts: [],
      fact: "",
      currentIndex: 0
    }
  },

  mounted() {
    axios
      .get('https://brianiswu-cat-facts-v1.p.rapidapi.com/facts', this.config)
      .then(response => this.parseData(response.data))
  },

  methods: {
    parseData(response) {
      // parse data logic
    },

    emitFact() {
      this.$emit('new-fact', this.fact)
    },

    timer() {
      // timer logic
    }
  }
}


</script>
