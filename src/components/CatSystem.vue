<template>
  <div>
    <button @click="emitFact">Emit Fact</button>
    <p>{{ fact }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      facts: [] as string[],
      fact: '',
      currentIndex: 0,
    };
  },
  emits: ['new-fact'],
  mounted() {
    axios
      .get('https://brianiswu-cat-facts-v1.p.rapidapi.com/facts', config)
      .then((response) => this.parsedata(response.data));
  },
  methods: {
    emitFact() {
      this.$emit('new-fact', this.fact);
      console.log('emitting');
    },
    parsedata(response: any) {
      console.log(response);
      for (const data of response) {
        this.facts.push(data.text);
      }
      this.fact = this.facts[this.currentIndex];
      this.currentIndex++;

      setInterval(this.timer, 10000);
    },
    timer() {
      console.log('timer ran');
      const length = this.facts.length;
      if (this.currentIndex === length) {
        this.currentIndex = 0;
      }
      this.fact = this.facts[this.currentIndex];
      this.currentIndex++;
      this.emitFact();
    },
  },
});
</script>
