<template>
  <div>
    <Header  id="head" v-on:onSearch="onSearch"/>
    <Notification />
    <GamesReleased/>
    <Pagination
    :total="totalResults"
    :perPage="gamesPerPage"
    :currentPage="currentPage"
    v-on:onPageChanged="onPageChanged"
    v-on:manualPage="onPageChanged"
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
  watch: {
    '$route.query': {
      handler: 'onPageQueryChange',
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions('gamesStore', ['searchGame']),
    ...mapActions('gamesReleased', ['setPage', 'searchGamesCreatedAll']),
    onSearch(query) {
      this.searchGame(query);
    },
    onPageQueryChange({ page = 1 }) {
      console.log(`2, onQueryChange event, page ${page}`);
      this.onPageChange(Number(page));
    },
    onPageChange(value) {
      console.log(`3 onPageChange func, pag ${value}`);
      this.setPage(value);
      this.searchGamesCreatedAll();
      const header = document.querySelector('#head');
      this.$scrollTo(header);
    },
    onPageChanged(page) {
      console.log(`1, on emit from pagination, page ${page}`);
      this.$router.push({ query: { page } })
        .catch((err) => {
          // Ignore the vuex err regarding  navigating to the page they are already on.
          if (
            err.name !== 'NavigationDuplicated'
      && !err.message.includes('Avoided redundant navigation to current location')
          ) {
            // But print any other errors to the console
            console.log(err);
          }
        });
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
