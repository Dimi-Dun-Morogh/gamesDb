<template>
<div class="container wrap">
  <h3>Games released last month: {{this.totalResultsLastMonth}}</h3>
  <h3>Games released total: {{this.totalResults}}</h3>
  <div  class="game-items-wrap">
  <div v-for="(game,index) in gamesReleased"  :key="index">
    <GameItem :game="game"/>
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
  },
  components: {
    GameItem,
  },
  computed: {
    ...mapGetters('gamesReleased', ['totalResults', 'totalResultsLastMonth', 'gamesReleased']),
  },
  methods: {
    ...mapActions('gamesReleased', ['searchGamesLastMonth', 'searchGamesCreatedAll']),
    onMount() {
      console.log('hi');
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
}
</style>
