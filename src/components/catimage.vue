<template>
  <div>
    <img :src="url" :width="width" :height="height" alt="Cat Image" />
    <button @click="emitFact">Emit Fact</button>
    <p>{{ fact }}</p>
  </div>
</template>

<script lang="ts">
import { createApp } from 'vue';
import axios from 'axios';

const catimages = createApp({
  data() {
    return {
      url: null as string | null,
      height: null as number | null,
      width: null as number | null,
      responsedata: null as any, // You can provide a more specific type for responsedata
    };
  },
  mounted() {
    axios
      .get('https://api.thecatapi.com/v1/images/search?size=full&api_key=live_cVPpavhcNrBgz7LuqhSqe1kBiXNyuFjI3yciF701lBFcBJ1AIcyWTwPvQyGpt3P2')
      .then((response) => this.parseData(response.data[0]));
  },
  methods: {
    handleNewFact(fact: any) {
      console.log('Emit received!');
      // This method should now correctly handle the 'new-fact' event
    },
    parseData(responseData: any) {
      this.url = responseData.url;
      this.width = responseData.width;
      this.height = responseData.height;
    },
  },
  created() {
    this.$on('new-fact', this.handleNewFact);
  },
});

// Listener event to change image

// catimages.mount('#catimage');

export default catimages;
</script>
