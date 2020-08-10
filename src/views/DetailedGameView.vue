<template>
   <div>
     <header class="header">
    <b-navbar type="dark" class="navbar"
    fixed="top" variant="dark">
      <b-container>
        <BNavbarBrand href="#" class="logo"> <b-button variant="success"
        @click="backToMain" class="mb-2">
      <b-icon icon="arrow-left" aria-hidden="true"></b-icon> back
    </b-button></BNavbarBrand>
<h3 class="mx-auto">{{currentGame.name}}({{currentGame.released.slice(0,4)}})</h3>
      </b-container>
    </b-navbar>
  </header>
  <GameDetails/>
   </div>
</template>

<script>
import GameDetails from '@/components/GameDetails.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'DetailedGameView.vue',
  components: {
    GameDetails,
  },
  computed: {
    ...mapGetters('gamesReleased', ['currentGame']),
  },
  methods: {
    backToMain() {
      this.$router.push({ name: 'Main' });
    },
  },
};
</script>
<style scoped>
h3 {
  color:#ffff;
}
.logo{
  position: absolute;
}
</style>
