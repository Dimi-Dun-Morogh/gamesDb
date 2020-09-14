<template>
  <div class="container profile-view">
    <Notification/>
    <div class="buttons-wrap d-flex justify-content-between">
      <b-button @click="goHome">Back to home</b-button>
      <b-button @click="logout">logout</b-button>
    </div>
    <b-tabs content-class="mt-3 tabs-wrap" justified>
      <b-tab title="profile details" :active="!Boolean(favoriteGames.length)">
        <ProfileDetails />
      </b-tab>
      <b-tab title="favorite items" :active="Boolean(favoriteGames.length)">
        <ProfileFavorites />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import ProfileDetails from '@/components/ProfileDetails.vue';
import ProfileFavorites from '@/components/ProfileFavorites.vue';
import Notification from '@/components/Notification.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProfileView',
  components: {
    ProfileDetails,
    ProfileFavorites,
    Notification,
  },
  computed: {
    ...mapGetters('authStore', ['isLoggedIn']),
    ...mapGetters('favStore', ['favoriteGames']),
    ...mapGetters('gamesReleased', ['currentPage']),
  },
  mounted() {
    if (!this.isLoggedIn) this.goHome();
  },
  watch: {
    isLoggedIn: 'goHome',
  },
  methods: {
    ...mapActions('authStore', ['logout']),
    goHome() {
      this.$router.push({
        name: 'Main',
        query: { page: this.currentPage },
      });
    },
  },
};
</script>
<style scoped>
.tabs {
  background-color: rgba(0, 0, 0, 0.3);
  padding-bottom: 15px;
}
.tabs >>> .nav-link {
  color: #fff !important;
}
.tabs >>> .active {
color:#000 !important;
}
.profile-view {
  /* min-height: 100vh; */
}
</style>
