<template>
  <div class="d-flex justify-content-center">
    <div class="col-sm-12 col-md-7">
      <b-list-group>
        <b-list-group-item class="list-item" v-show="!favoriteGames.length">
          <span>you haven't added any fav's yet</span>
        </b-list-group-item>
        <b-list-group-item class="list-item" v-for="(game, index) in favoriteGames" :key="index">
          <span @click="goDetailed(game)">{{game.name}}
             {{game.released ? `(${game.released.slice(0,4)})` : ""}}</span>
          <div class="wrap-btns ">
            <b-dropdown
              id="dropdown-platforms"

              text="Platforms"
              variant="success"
              class="dropdown-platforms"
            >
              <b-dropdown-item href="#" v-for="(platform,index) in game.platforms" :key="index">
              {{platform.platform.name}}</b-dropdown-item>
            </b-dropdown>
            <b-dropdown
              id="dropdown-genres"

              text="Genres"
              variant="success"
              class="dropdown-platforms"
            >
              <b-dropdown-item href="#" v-for="(genre,index)
               in game.genres" :key="index">{{genre.name}}</b-dropdown-item>
            </b-dropdown>
            <b-button @click="deleteGame(game.id)"><b-icon icon="trash"/></b-button>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProfileFavorites',
  computed: {
    ...mapGetters('favStore', ['favoriteGames']),
  },
  methods: {
    ...mapActions('favStore', ['removeFavoriteGame', 'setRouteFavs']),
    ...mapActions('gamesReleased', ['setCurrentGame']),
    deleteGame(id) {
      this.removeFavoriteGame(id);
    },
    goDetailed(game) {
      this.setCurrentGame(game);
      this.setRouteFavs(true);
      this.$router.push({ name: 'Detailed' });
    },
  },
};
</script>
<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
  text-align: center;
}
.list-item span {
  margin-left: auto;
  margin-right: auto;
}
.list-item:hover {
  /* transform: scale(1.03); */
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
}
.wrap-btns {
  display: flex;
}
.wrap-btns >>> button {
  border-radius: 0%;
  margin-right: 1px;
}
@media (max-width: 990px) {
.wrap-btns {
  flex-direction: column;
}
}
</style>
