<template>
  <div>
    <Header  id="head" v-on:onSearch="onSearch"/>
    <GamesReleased/>
    <Pagination
    :total="totalResults"
    :perPage="gamesPerPage"
    :currentPage="currentPage"
    v-on:onPageChanged="onPageChange"
    v-on:manualPage="onPageChange"
    />
    <div class="api">
      API - <a href="https://api.rawg.io">RAWG best api EU</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import GamesReleased from '@/components/GamesReleased.vue';
import Pagination from '@/components/Pagination.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainView',
  components: {
    Header,
    GamesReleased,
    Pagination,
  },
  computed: {
    ...mapGetters('gamesReleased', ['currentPage', 'totalResults', 'gamesPerPage']),
  },
  methods: {
    ...mapActions('gamesStore', ['searchGame']),
    ...mapActions('gamesReleased', ['setPage', 'searchGamesCreatedAll']),
    onSearch(query) {
      this.searchGame(query);
    },
    onPageChange(value) {
      this.setPage(value);
      this.searchGamesCreatedAll();
      const header = document.querySelector('#head');
      this.$scrollTo(header);
    },
  },
};
</script>
<style scoped>
.api {
  text-align: center;
background-color: rgba(0,0,0,.4);
color: #fff;
}
.api a {
  font-size: 14px;
text-decoration: none;
color: black;
font-weight: bold;
}
</style>
