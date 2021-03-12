<template>
  <v-app>
    <AppTopBar/>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar';

export default {
  name: "App",
  components: {
    AppTopBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>
