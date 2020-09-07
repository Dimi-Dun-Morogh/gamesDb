<template>
  <div>
    <b-modal ref="my-modal" hide-footer>
      <div class="d-block text-center">
        <b-tabs content-class="mt-3">
          <b-tab title="SignUp" active>
            <span class="error" v-show="showError">passwords don't much</span>
            <b-row class="justify-content-center mb-1">
              <b-col sm="3">
                <label for="email">email</label>
              </b-col>
              <b-col sm="6">
                <b-form-input id="email" type="email" v-model="email" />
              </b-col>
            </b-row>
            <b-row class="justify-content-center mb-1">
              <b-col sm="3">
                <label for="password">password</label>
              </b-col>
              <b-col sm="6">
                <b-form-input id="password" type="password" v-model="password" @focus="hideError" />
              </b-col>
            </b-row>
            <b-row class="justify-content-center mb-1">
              <b-col sm="3">
                <label for="repeatPassword">repeat password</label>
              </b-col>
              <b-col sm="6">
                <b-form-input
                  id="repeatPassword"
                  type="password"
                  v-model="passwordRep"
                  :state="passMatch"
                />
              </b-col>
            </b-row>
            <b-button @click="signUpForm" :disabled="!allFilled">SignUp</b-button>
          </b-tab>
          <b-tab title="Login">
            <b-row class="justify-content-center mb-1">
              <b-col sm="3">
                <label for="email">email</label>
              </b-col>
              <b-col sm="6">
                <b-form-input id="email" type="email" v-model="email" />
              </b-col>
            </b-row>
            <b-row class="justify-content-center mb-1">
              <b-col sm="3">
                <label for="password">password</label>
              </b-col>
              <b-col sm="6">
                <b-form-input id="password" type="password" v-model="password" />
              </b-col>
            </b-row>
            <b-button @click="loginForm">Login</b-button>
          </b-tab>
        </b-tabs>
      </div>
    </b-modal>
    <b-button @click="showModal" v-show="!isLoggedIn">Open Modal</b-button>
    <b-button v-show="isLoggedIn" @click="goProfile">Profile</b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AuthModal',
  data: () => ({
    email: '',
    password: '',
    passwordRep: '',
    showError: false,
  }),
  computed: {
    ...mapGetters('authStore', ['isLoggedIn']),
    passMatch() {
      return this.passwordRep.length === 0 ? null : this.password === this.passwordRep;
    },
    allFilled() {
      return Boolean((this.password && this.email));
    },
  },
  watch: {
    isLoggedIn: 'hideModal',
  },
  methods: {
    ...mapActions('authStore', ['signUp', 'login']),
    showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal() {
      this.$refs['my-modal'].hide();
    },
    hideError() {
      this.showError = false;
    },
    toggleError() {
      this.showError = true;
    },
    signUpForm() {
      const { email, passwordRep, password } = this;
      if (password !== passwordRep) {
        this.toggleError();
        return false;
      }
      this.signUp({ email, password });
      return true;
    },
    loginForm() {
      const { email, password } = this;
      this.login({ email, password });
    },
    goProfile() {
      this.$router.push({ name: 'Profile' });
    },
  },
};
</script>
<style scoped>
.error {
  font-size: 13px;
  color: red;
}
</style>
