<template>
  <div>
    <b-button v-b-toggle.sidebar-1 class="btn-toggleSidebar btn-success">apply filters</b-button>
    <b-sidebar id="sidebar-1"
    class="sideFilters"  shadow>
      <div class="px-3 py-2">
  <div class="select-genre">
        <b-form-select v-model="selectedGenre"
         :options="optionsGenre"
         size="sm" class="mt-3 select-genre-select"></b-form-select>
    <div class="mt-3">Select platform:</div>
  </div>
  <div class="select-platform">
        <!-- <b-form-select v-model="selectedPlatform" :options="optionsPlatform"
         size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">Selected Platform: <strong>{{ selectedPlatform }}</strong></div> -->
    <span v-for="(platform,index) in platforms"
     :key="index"
     :data-id="platform.id"
     @click="clickPlatform"
     >
      {{platform.name}}
    </span>
  </div>
      </div>
       <b-button size="sm" class="btn-filter" @click="SearchFiltered"><b-icon icon="search"
     aria-hidden="true"></b-icon>Search</b-button>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
/// platforms/{id}
// https://api.rawg.io/api/games?genres/4
// https://api.rawg.io/api/games?platforms=49&genres=4&page
export default {
  name: 'FiltersSideBar',
  data: () => ({
    selectedGenre: '',
    optionsGenre: [
      {
        value: '',
        text: 'All genres',
      },
      {
        value: '4',
        text: 'Action',
      },
      {
        value: '3',
        text: 'Adventure',
      },
      {
        value: '51',
        text: 'Indie',
      },
      {
        value: '5',
        text: 'RPG',
      },
      {
        value: '10',
        text: 'Strategy',
      },
      {
        value: '2',
        text: 'Shooter',
      },
      {
        value: '6',
        text: 'Fighting',
      }, {
        value: '59',
        text: 'massively-multiplayer',
      },
      {
        value: '1',
        text: 'Racing',
      }],
    selectedPlatform: '',

  }),
  computed: {
    ...mapGetters('gamesReleased', ['platforms']),
  },
  methods: {
    ...mapActions('gamesReleased', ['setFilter', 'setPage', 'searchGamesCreatedAll']),
    clickPlatform(e) {
      const container = document.querySelector('.select-platform');
      const element = e.target;
      container.querySelectorAll('span').forEach((span) => {
        if (span !== e.target) {
          span.classList.remove('selected');
        }
      });
      element.classList.toggle('selected');
      if (element.dataset.id === this.selectedPlatform) {
        this.selectedPlatform = '';
      } else {
        this.selectedPlatform = element.dataset.id;
      }
    },
    SearchFiltered() {
      let filterQuery = `platforms=${this.selectedPlatform}&`;
      if (this.selectedPlatform.length && this.selectedGenre.length) {
        filterQuery = `platforms=${this.selectedPlatform}&genres=${this.selectedGenre}&`;
      }
      if (!this.selectedPlatform.length && this.selectedGenre.length) {
        filterQuery = `genres=${this.selectedGenre}&`;
      }
      if (this.selectedPlatform.length && !this.selectedGenre.length) {
        filterQuery = `platforms=${this.selectedPlatform}&`;
      }
      if (!this.selectedPlatform.length && !this.selectedGenre.length) {
        filterQuery = '';
      }
      this.setFilter(filterQuery);
      this.setPage(1);
      this.searchGamesCreatedAll();
    },
  },

};
</script>

<style scoped>
.sideFilters  >>>.b-sidebar{
  color: #fff !important;
background-color: rgba(0, 0, 0, 0.9) !important;
}
.sideFilters >>>.close {
  color: #fff !important;
}
.select-platform {
 border-top: 1px solid #f9faf9;
padding-top: 10px;
margin-top: 10px;
}
.select-platform span {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}
.selected {
  background-color: #28a745;
  background-color: #28a745;
border-radius: 25px;
padding: 0 10px;
}
.btn-filter {
  display: flex;
align-items: center;
margin-left: auto;
margin-right: auto;
}

</style>
