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
    <span v-for="(platform,index) in platforms"
     :key="index"
     :data-id="platform.id+'-'+platform.name"
     @click="clickPlatform"
     >
      {{platform.name}}
    </span>
  </div>
         <b-button size="sm" v-b-toggle.sidebar-1
          class="btn-filter" @click="SearchFiltered"><b-icon icon="search"
     aria-hidden="true"></b-icon>Search</b-button>
     <div class="sort-by-title">Sort by:</div>
     <div class="sort-by-items">
       <ul @click="clickSort">
         <li data-query="-released">Date</li>
         <li data-query="-rating">Rating</li>
         <li data-query="name">Aplhabet</li>
       </ul>
     </div>
      </div>

    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FiltersSideBar',
  data: () => ({
    sortString: '',
    genreString: '',
    selectedGenre: '',
    optionsGenre: [
      {
        value: '-All genres',
        text: 'All genres',
      },
      {
        value: '4-Action',
        text: 'Action',
      },
      {
        value: '3-Adventure',
        text: 'Adventure',
      },
      {
        value: '51-Indie',
        text: 'Indie',
      },
      {
        value: '5-RPG',
        text: 'RPG',
      },
      {
        value: '10-Strategy',
        text: 'Strategy',
      },
      {
        value: '2-Shooter',
        text: 'Shooter',
      },
      {
        value: '6-Fighting',
        text: 'Fighting',
      }, {
        value: '59-massively-multiplayer',
        text: 'massively-multiplayer',
      },
      {
        value: '1-Racing',
        text: 'Racing',
      }],
    selectedPlatform: '',

  }),
  computed: {
    ...mapGetters('gamesReleased', ['platforms']),
  },
  methods: {
    ...mapActions('gamesReleased', ['setGenre', 'setPage', 'searchGamesCreatedAll', 'setSortBy', 'setPlatform', 'setFilterString']),
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
      let platforms = '';
      let platformString = '';
      let genre = '';
      let genreString = '';
      if (this.selectedPlatform) {
        const [platform, platformName] = this.selectedPlatform.split('-');
        platforms = `platforms=${platform}&`;
        platformString = `+${platformName}`;
      }
      if (this.selectedGenre) {
        const [genreId, genreName] = this.selectedGenre.split('-');
        genre = genreId.length ? `genres=${genreId}&` : '';
        genreString = `+${genreName}`;
      }
      this.setFilterString(platformString + genreString);
      this.setPlatform(platforms);
      this.setGenre(genre);
      this.setPage(1);
      this.searchGamesCreatedAll();
    },
    clickSort(e) {
      if (e.target.nodeName === 'LI') {
        const element = e.target;
        const container = e.target.parentNode.querySelectorAll('li');
        const sortQuery = e.target.dataset.query;
        container.forEach((li) => {
          if (li !== element) li.classList.remove('selected');
        });
        element.classList.toggle('selected');
        this.setSortBy(sortQuery);
        this.setPage(1);
        this.searchGamesCreatedAll();
      }
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
margin-top: 20px;
margin-bottom: 10px;
}
.sort-by-title{
      border-bottom: 1px solid;
    padding-bottom: 10px;
}
.sort-by-items ul {
  padding: 0;
  padding-top: 5px;
}
.sort-by-items li {
  display: inline;
  list-style: none;
  margin-right: 6px;
  cursor:pointer;
}

</style>
