<template>
  <div>
    <Header  id="head" v-on:onSearch="onSearch"/>
    <Notification />
    <GamesReleased/>
    <Pagination
    :total="totalResults"
    :perPage="gamesPerPage"
    :currentPage="currentPage"
    v-on:onPageChanged="onPageChange"
    v-on:manualPage="onPageChange"
    />
    <div class="api">
      API - <a href="https://rawg.io/apidocs">RAWG best api EU</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import GamesReleased from '@/components/GamesReleased.vue';
import Pagination from '@/components/Pagination.vue';
import Notification from '@/components/Notification.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MainView',
  components: {
    Header,
    GamesReleased,
    Pagination,
    Notification,
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
 background-color: rgba(0,0,0,.7);
color: #fff;
font-size: 10px;
max-width: 130px;
margin-left: auto;
margin-right: auto;
border-radius: 5px;
padding: 2px;
font-weight: bold;
}
.api a {
  font-size: 10px;
text-decoration: none;
color: black;
font-weight: bold;
color:#fff;
}
</style>
