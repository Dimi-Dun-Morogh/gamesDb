<template>
  <div id="app">
<div id="background"  :style="posterBg"></div>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters('gamesReleased', ['bgPoster']),
    posterBg() {
      return {
        'background-image': `url(${this.bgPoster})`,
      };
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  /* background-color: rgba(255, 255, 255, 0.2); */
  min-height: 100vh;
}
#background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
}
#background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  background-image: url('./assets/wallpaper.jpg');
  background-size: cover;
}

</style>
