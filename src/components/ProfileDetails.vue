<template>
  <div>
    <b-row class="justify-content-center mb-1">
      <b-col sm="3">
        <label for="fName">First Name</label>
      </b-col>
      <b-col sm="3">
        <b-form-input id="fName" type="text" v-model="firstName" />
      </b-col>
    </b-row>
    <b-row class="justify-content-center mb-1">
      <b-col sm="3">
        <label for="lName">last Name</label>
      </b-col>
      <b-col sm="3">
        <b-form-input id="lName" type="text" v-model="lastName" />
      </b-col>
    </b-row>
    <b-row class="justify-content-center mb-1">
      <b-col sm="3">
        <label for="country">country</label>
      </b-col>
      <b-col sm="3">
        <b-form-input id="country" type="text" v-model="country" />
      </b-col>
    </b-row>
    <b-row class="justify-content-center mb-1">
      <b-col sm="3">
        <label for="email">email</label>
      </b-col>
      <b-col sm="3">
        <b-form-input id="email" type="text" disabled v-model="email" />
      </b-col>
    </b-row>
    <b-row class="justify-content-center mb-1">
      <b-col sm="3">
        <label for="username">username</label>
      </b-col>
      <b-col sm="3">
        <b-form-input id="username" type="text" required v-model="displayName" />
      </b-col>
    </b-row>
    <b-row class="justify-content-center mb-1">
      <b-button @click="updateDetails">Update</b-button>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProfileDetails',
  data: () => ({
    firstName: '',
    lastName: '',
    country: '',
    displayName: '',
    email: '',
  }),
  watch: {
    user: 'populateInputs',
  },
  mounted() {
    this.populateInputs();
  },
  computed: {
    ...mapGetters('userStore', ['user']),
  },
  methods: {
    ...mapActions('userStore', ['updateUserData']),
    updateDetails() {
      const {
        firstName, lastName, country, displayName,
      } = this;
      if (displayName.length) {
        this.updateUserData({
          firstName, lastName, country, displayName,
        });
      }
    },
    populateInputs() {
      const {
        displayName, email, firstName = '', lastName = '', country = '',
      } = this.user;
      this.firstName = firstName;
      this.lastName = lastName;
      this.country = country;
      this.displayName = displayName;
      this.email = email;
    },
  },
};
</script>
<style scoped>
label {
  display: block;
  color: #fff;
}
</style>
