<template>
 <header class="header">
    <b-navbar type="dark" class="navbar" variant="dark">
      <b-container>
        <BNavbarBrand href="#" class="logo"> GamesDB</BNavbarBrand>
        <div class="pickYear">
    <label for="range-1">Set year</label>
    <b-form-input id="range-1" v-model="year" type="range" min="1970" max="2020"></b-form-input>
    <div class="button-wrap">
      <b-button-group>
<b-button size="sm" @click="searchYear"><b-icon icon="search"
     aria-hidden="true"></b-icon> {{ year }}</b-button>
     <b-button size="sm" variant="danger" @click="resetYear"><b-icon icon="x-circle"
     aria-hidden="true"></b-icon> reset</b-button>
      </b-button-group>

    </div>
  </div>
        <b-nav-form>
          <b-form-input
            class="mr-sm-2 search-input"
            placeholder="Search"
            v-model="searchValue"
            debounce="5000"
            @keyup.enter="searchQuery"
          ></b-form-input>

        </b-nav-form>
        <FiltersSideBar class="filters"/>
      </b-container>
    </b-navbar>
  </header>
</template>
<script>
import { mapActions } from 'vuex';
import FiltersSideBar from '@/components/FiltersSideBar.vue';

export default {
  name: 'Header',
  components: {
    FiltersSideBar,
  },
  data: () => ({
    searchValue: '',
    year: 2020,
  }),
  methods: {
    ...mapActions('gamesReleased', ['setPage', 'searchGamesCreatedAll', 'setFilter', 'setDates', 'setQuery']),
    searchQuery(e) {
      e.preventDefault();
      // this.$emit('onSearch', this.searchValue);
      const query = `search=${this.searchValue}&`;
      this.setPage(1);
      this.setQuery(query);

      this.searchGamesCreatedAll();
    },
    searchYear() {
      const dates = `dates=${this.year}-01-01,${this.year}-12-12&`;
      this.setPage(1);
      this.setDates(dates);

      this.searchGamesCreatedAll();
    },
    resetYear() {
      this.year = 2020;
      const dates = '';
      this.setPage(1);
      this.setDates(dates);

      this.searchGamesCreatedAll();
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}
.logo{
  position: relative;
}
.search-input {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
  border-color: transparent;
}
.search-input:focus {
  box-shadow: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(0, 0, 0, 0.6);
}
.pickYear {
  color: #ffff;
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  top:55px;
  border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
padding-bottom: 5px;
background: linear-gradient(90deg, rgba(2, 0, 36, 0.41) 0%,
 rgb(11, 19, 14) 52%, rgb(137, 138, 159) 100%);
}
.filters {
  position: absolute;
right: 0;
top: 60px;
}

@media (max-width:376px) {
  .filters {
    top:265px;
  }
}
</style>
