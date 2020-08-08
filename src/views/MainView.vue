<template>
  <div>
    <Header v-on:onSearch="onSearch"/>
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
    },
  },
};
</script>
