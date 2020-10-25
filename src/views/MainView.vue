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
  watch: {
    '$route.query': {
      handler: 'onQueryChange',
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions('gamesStore', ['searchGame']),
    ...mapActions('gamesReleased', ['setGenre', 'setPage', 'searchGamesCreatedAll', 'setSortBy', 'setPlatform', 'setDates', 'searchGamesCreatedAll']),
    onSearch(query) {
      this.searchGame(query);
    },
    onQueryChange(query) {
      console.log(query, 'onQueryChange');
      if (+query.page !== +this.currentPage) {
        //! no double requests
        // console.log(`query change, query.page ${query.page} currentPage ${this.currentPage}`);
        this.setQueryParams(query);
        this.onPageChange(query.page);
      }
    },
    onPageChange(page = 1) {
      console.log(`onpagechange ${page}`);
      this.setPage(page);
      this.searchGamesCreatedAll();
      const header = document.querySelector('#head');
      this.$scrollTo(header);
    },
    setQueryParams({
      dates = '', genres = '', ordering = '-rating', page = '1', platforms = '',
    }) {
      console.log('setting params page', page);
      this.setGenre(genres);
      this.setPage(page);
      this.setSortBy(ordering);
      this.setPlatform(platforms);
      this.setDates(dates);
    },
  },
};
</script>
<style scoped>
</style>
