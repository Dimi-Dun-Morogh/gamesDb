<template>
<div class="container wrap">
  <h3>Games released last month: {{this.totalResultsLastMonth}}</h3>
  <h3>Games found: {{this.totalResults}} <span v-show="this.filterString.length">({{filterString}})
    </span></h3>
  <div  class="game-items-wrap">
  <div v-for="(game,index) in gamesReleased"  :key="index">
    <GameItem :game="game"
     @mouseover.native="onMouseOver(game.background_image)"
     @mouseout.native="onMouseOut"/>
  </div>
  </div>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GameItem from './GameItem.vue';

export default {
  name: 'GamesLastMonth',
  mounted() {
    this.searchGamesLastMonth();
    this.searchGamesCreatedAll();
    this.getPlatforms();
  },
  components: {
    GameItem,
  },
  computed: {
    ...mapGetters('gamesReleased', ['totalResults', 'totalResultsLastMonth', 'gamesReleased', 'filterString']),
  },
  methods: {
    ...mapActions('gamesReleased', ['searchGamesLastMonth', 'searchGamesCreatedAll', 'getPlatforms', 'setBgPoster']),
    onMouseOver(poster) {
      this.setBgPoster(poster);
    },
    onMouseOut() {
      this.setBgPoster('./assets/wallpaper.jpg');
    },
  },

};
</script>
<style scoped>
.game-items-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.wrap {
padding: 0;
}
</style>
