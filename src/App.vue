<template>
  <div id="app">
    <div id="background" :style="posterBg"></div>
    <div class="wrap">
      <Preloader :preloader="showPreloader" class="wrap">
        <template v-slot:wrapComponent>
          <router-view />
          <Footer />
        </template>
      </Preloader>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Footer from '@/components/Footer.vue';
import Preloader from '@/components/Preloader.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Preloader,
  },
  // mounted() {
  //   console.log(this.$route.query);
  //   console.log(this.$router.history.current.fullPath);
  //   this.setQueryParams(this.$route.query);
  //   this.$router.push({ path: '/', query: this.$route.query })
  //     .catch((err) => {
  //       // Ignore the vuex err regarding  navigating to the page they are already on.
  //       if (
  //         err.name !== 'NavigationDuplicated'
  //     && !err.message.includes('Avoided redundant navigation to current location')
  //       ) {
  //         // But print any other errors to the console
  //         console.error(err);
  //       }
  //     });
  //   this.searchGamesCreatedAll();
  // },
  computed: {
    ...mapGetters('gamesReleased', ['bgPoster']),
    ...mapGetters('preloaderStore', ['showPreloader']),
    posterBg() {
      return {
        'background-image': `url(${this.bgPoster})`,
      };
    },
  },
  methods: {
    ...mapActions('gamesReleased', ['setGenre', 'setPage', 'searchGamesCreatedAll', 'setSortBy', 'setPlatform', 'setDates', 'searchGamesCreatedAll']),
    setQueryParams({
      dates = '', genres = '', ordering = '-rating', page = '1', platforms = '',
    }) {
      this.setGenre(genres);
      this.setPage(page);
      this.setSortBy(ordering);
      this.setPlatform(platforms);
      this.setDates(dates);
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
*::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* Chrome/Safari/Webkit */
}

* {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
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
  background-image: url("./assets/wallpaper.jpg");
  background-size: cover;
}
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
