<template>
  <div class="game-item mt-4">
<div class="game-item-poster" :style="posterBg"></div>
<div class="game-item-info">
  <div class="game-item-title">
    <span>{{game.name}} {{releaseDate}}</span>
  </div>
  <div class="game-item-more-info">
    <b-button class="moreInfo-btn shadow-none">More Info</b-button>
  </div>
  <div class="game-item-platforms">
    <b-dropdown id="dropdown-dropup" dropup text="Platforms"
     variant="success" class="dropdown-platforms">
    <b-dropdown-item href="#" v-for="(platform,index) in game.platforms" :key="index">
      {{platform.platform.name}}</b-dropdown-item>

  </b-dropdown>
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
export default {
  name: 'GameItem',
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterBg() {
      return {
        'background-image': this.game.background_image !== null ? `url(${this.game.background_image})` : 'url(https://www.wwe.com/f/styles/wwe_large/public/2016/02/Yokozuna_bio--12cbb0873e1b83a7fa05ec45614fc134.jpg)',
      };
    },
    releaseDate() {
      return this.game.released ? `(${this.game.released.slice(0, 4)})` : null;
    },
    genre() {
      return this.game.genres.length ? this.game.genres[0].name : null;
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
  transform: scale(1.12);
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
}
.game-item-more-info {
  margin-top: auto;
  margin-bottom: 30px;
  height: 100px;
width: 100px;
background-color: #6c757d;
border-radius: 50%;
position: relative;
align-self: center;
background-color: rgba(0,0,0,.3);
border: 1px inset  #e5a714c9;
opacity: 0;
top: 50%;
position: absolute;
}
.game-item:hover .game-item-more-info {
  opacity: 1;
}
.game-item-more-info:hover {
  transform: scale(1.02);
  background-color: rgba(0,0,0,.7);
}
.moreInfo-btn {
position: absolute;
transform: translate(-50%,30%);
background-color: transparent;
border-color: transparent;
}
.moreInfo-btn:focus,.moreInfo-btn:active,.moreInfo-btn:hover {
  background-color: transparent!important;
  border-color: transparent;
}
</style>
