<template>
  <b-container class="wrap">
    <b-button variant="success"
        @click="backToMain" class="mb-2 btn-back">
      <b-icon icon="arrow-left" aria-hidden="true"></b-icon> back
    </b-button>
<h3>{{currentGame.name}}{{releaseDate}}</h3>
<div class="clip" v-show="currentGame.clip!==null">
  <video :src="clipSrc" controls></video>

</div>
<b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1280"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="slider mx-auto"
    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="(screen,index) in currentGame.short_screenshots"  :key="index"

      ><template  v-slot:img>
        <img :src="screen.image"
        class="d-block img-fluid w-100"
        width="600px"
        height="350px">
      </template>
      </b-carousel-slide>
    </b-carousel>
    <div class="info-wrap">
      <div class="platforms">
      <span>platforms:</span>
      <ul>
        <li v-for="(platform,index) in currentGame.platforms" :key="index">
         {{index>0? ' |':''}} {{platform.platform.name}}
        </li>
      </ul>
    </div>
    <div class="genres">
      <span>genres:</span>
     <ul>

        <li v-for="(genre,index) in currentGame.genres" :key="index">
        {{index>0? ' |':''}}  {{genre.name}}
        </li>
      </ul>
    </div>
    <div class="stores" v-show="currentGame.stores">
      <span>Avalaible in:</span>
      <ul>

        <li v-for="(store,index) in currentGame.stores" :key="index">
          {{index>0? ' |':''}} {{store.store.name}}
        </li>
      </ul>

    </div>
    </div>
     </b-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'GameDetails',
  data: () => ({
    slide: 0,
    sliding: null,
  }),
  computed: {
    ...mapGetters('gamesReleased', ['currentGame']),
    clipSrc() {
      return this.currentGame.clip !== null ? this.currentGame.clip.clip : '';
    },
    releaseDate() {
      return this.currentGame.released !== null ? `(${(this.currentGame.released).slice(0, 4)})` : '';
    },
  },
  watch: {
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    backToMain() {
      this.$router.push({ name: 'Main' });
    },
  },
};
</script>
<style scoped>
.wrap {
  color: #ffff;
  max-width: 600px;
  padding-top: 15px;
}
.wrap h3 {
  margin-top: 40px;
background-color: rgba(0,0,0,.5);
}
.slider {
overflow: hidden;}
.slider img {
  height: 350px ;
}
ul {margin: 0;
padding: 0;
/* display: inline-block; */
}
li {
  display: inline;
  list-style: none;
}
.info-wrap {

  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0,0,0,.7);
  padding: 10px 0;
margin-top: 10px;
border-radius: 5px;
}
.info-wrap span {
  margin-right: 10px;
}
.genres, .platforms {
 border-bottom: 1px solid white;
}
.stores, .genres, .platforms {
  margin-left: 30px;
  margin-right: 30px;

  padding:10px 0
}
video {
  width: 100%;
  background-color: black;
}
.btn-back {
  position: absolute;
left: 15px;
}
@media( max-width:776px)  {
.logo {
  top:110px;
}
}
</style>
