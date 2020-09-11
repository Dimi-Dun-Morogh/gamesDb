<template>
  <div class="game-item mt-4">
<div class="game-item-poster" :style="posterBg"></div>
<div class="game-item-info">
  <div class="game-item-title">
    <span>{{game.name}} {{releaseDate}}</span>
  </div>
  <div class="game-item-more-info-wrap">
    <b-button class="favs-btn btn-outline-danger shadow-none"
     @click="addToFavs"><b-icon :icon="inFavsOrNot" variant="danger" class="favs-icon"
      ></b-icon></b-button>
       <div class="game-item-more-info">
    <div class="game-item-platforms">
    <b-dropdown id="dropdown-dropup" dropup text="Platforms"
     variant="success" class="dropdown-platforms">
    <b-dropdown-item href="#" v-for="(platform,index) in game.platforms" :key="index">
      {{platform.platform.name}}</b-dropdown-item>

  </b-dropdown>
  </div>
    <b-button class="moreInfo-btn btn-success shadow-none" @click="detailed()">More Info</b-button>
  </div>
  </div>
  <div class="game-item-bottom">
<span>{{genre}}</span>
<span><b-icon-star-fill  class="rating">
  </b-icon-star-fill>{{game.rating}}/{{game.rating_top}}</span>
  </div>
</div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'GameItem',
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('gamesReleased', ['favoriteGames', 'isItInFavs']),
    ...mapGetters('favStore', ['isItInFavs']),
    ...mapGetters('authStore', ['isLoggedIn']),
    posterBg() {
      return {
        'background-image': this.game.background_image !== null ? `url(${this.game.background_image})` : 'url(https://www.wwe.com/f/styles/wwe_large/public/2016/02/Yokozuna_bio--12cbb0873e1b83a7fa05ec45614fc134.jpg)',
      };
    },
    inFavsOrNot() {
      const inFav = this.isItInFavs(this.game.id);
      return inFav.length ? 'heart-fill' : 'heart';
    },
    releaseDate() {
      return this.game.released ? `(${this.game.released.slice(0, 4)})` : null;
    },
    genre() {
      return this.game.genres.length ? this.game.genres[0].name : null;
    },
  },
  methods: {
    ...mapActions('gamesReleased', ['setCurrentGame']),
    ...mapActions('favStore', ['addFavoriteGame', 'removeFavoriteGame']),
    ...mapActions(['loadMessage']),
    setGame() {
      this.setCurrentGame(this.game);
    },
    detailed() {
      this.setGame();
      this.$router.push({ name: 'Detailed' });
    },
    addToFavs() {
      const inFav = this.isItInFavs(this.game.id);
      if (!this.isLoggedIn) {
        this.loadMessage({
          variant: 'danger',
          title: 'error',
          message: 'you have to be logged in',
          duration: 6000,
          showClose: true,
        });
        return false;
      }
      console.log(inFav, 'in fav');
      if (!inFav.length) {
        console.log('add to fav');
        this.addFavoriteGame(this.game);
      } else {
        console.log('already in favs');
        this.removeFavoriteGame(this.game.id);
      }
      return true;
    },
  },
};

</script>
<style scoped>
.game-item {
   position: relative;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 400px;
  width: 255px;
  z-index: 4;
  color:#ffff;
}
.game-item:hover {
   box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
  border: 2px solid black;
}
.game-item-poster {
    position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.game-item-title {
  background-color: rgba(0,0,0,.7);
padding: 5px;
font-size: 20px;
}
.game-item-more-info-wrap {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}
.game-item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.game-item-bottom {
    background-color: rgba(0,0,0,.7);
padding: 5px;
font-size: 20px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
}
.rating {
  color:#f9b430ed;
  transform: translate(-10%,-11%);
font-size: 15px;
}
.game-item-platforms {
  margin-top: auto;
  align-self: flex-start;
}
.dropdown-platforms >>> .dropdown-toggle{
  border-radius: 0;
  box-shadow: none;
}
.game-item-more-info {
  display: flex;
justify-content: space-between;
margin-top: auto;
}
.favs-btn {
  background-color: transparent;
  border: none;
  color: red;
  font-size: 20px;
  background-color: #0f0f10b3;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
.favs-icon {
  position: absolute;
  transform: translate(-50%,-40%);
}
.favs-btn:focus, .favs-btn:active, .favs-btn:hover {
  background-color: #0f0f10b3;
  border:none;
}
.moreInfo-btn {
border-radius: 0;
width: 107.27px;
box-shadow: none;
}
.moreInfo-btn:focus,.moreInfo-btn:active,.moreInfo-btn:hover {
  border-color: transparent;
}
</style>
