<template>
   <div>
     <!-- <header class="header">
    <b-navbar type="dark" class="navbar"
    fixed="top" variant="dark">
      <b-container>
        <BNavbarBrand href="#" class="logo"> <b-button variant="success"
        @click="backToMain" class="mb-2">
      <b-icon icon="arrow-left" aria-hidden="true"></b-icon> back
    </b-button></BNavbarBrand>
<h3 class="mx-auto">{{currentGame.name ||''}}({{currentGame.released.slice(0,4)}})</h3>
      </b-container>
    </b-navbar>
  </header> -->
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
    ...mapGetters('gamesReleased', ['currentGame', 'currentPage']),
  },
  watch: {
    currentPage: 'redirectHome',

  },
  mounted() {
    if (this.currentGame == null) {
      this.$router.push({ name: 'Main' });
    }
  },
  methods: {
    redirectHome() {
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
@media (max-width: 996px) {
h3 {
  font-size: 1.55rem;
}
}
@media( max-width:776px)  {
.logo {
  position: relative;
  padding-bottom: 0;
}
.navbar {
  padding:0;
  padding-top: 5px;
}
}
</style>
