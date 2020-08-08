<template>
 <header class="header">
    <b-navbar type="dark" class="navbar" variant="dark">
      <b-container>
        <BNavbarBrand href="#" class="logo"> GamesDB</BNavbarBrand>
        <div class="pickYear">
    <label for="range-1">Top by year</label>
    <b-form-input id="range-1" v-model="year" type="range" min="1970" max="2020"></b-form-input>
    <div class="button-wrap">
      <!-- <div class="mt-2">Year: {{ year }}</div> -->
     <b-button size="sm"><b-icon icon="search" aria-hidden="true"></b-icon> {{ year }}</b-button>
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

          >
        </b-nav-form>
      </b-container>
    </b-navbar>
  </header>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  data: () => ({
    searchValue: '',
    year: 2020,
  }),
  methods: {
    ...mapActions('gamesStore', ['searchGame']),
    searchQuery(e) {
      e.preventDefault();
      this.$emit('onSearch', this.searchValue);
    },
  },
};
</script>

<style scoped>
.header {
  /* margin-bottom: 30px; */
}
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
</style>
