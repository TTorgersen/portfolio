<template>
  <v-app>
    <Landing></Landing>
  </v-app>
</template>

<script>
import Landing from './components/landingpage.vue'
export default {
  name: 'App',

  components: {
    Landing, 
  },

  data: () => ({
    //
  }),
};
</script>
