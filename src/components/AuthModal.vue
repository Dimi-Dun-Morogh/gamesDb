<template>
  <div>
    <b-modal
      ref="my-modal"
      hide-footer
      size="sm"
      hide-header
      modal-class="modal-wrap"
      content-class="auth-modal-content"
    >
      <button class="close" @click="hideModal">×</button>
      <div class="d-block text-center">
        <b-tabs content-class="mt-3">
          <b-tab title="SignUp" active>
            <span class="error" v-show="showError">passwords don't much</span>
            <div class="sign-up-wrap">
              <b-form :validated="allFilled">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="email"
                  description="We'll never share your email with anyone else."
                  label-size="sm"
                >
                  <b-form-input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    placeholder="Enter email"
                    size="sm"
                    :state="validateEmail"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="password:"
                  label-for="password"
                  label-size="sm"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                    placeholder="Enter password"
                    size="sm"
                    :state="passLength"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-3"
                  label="confirm password:"
                  label-for="passwordRep"
                  label-size="sm"
                >
                  <b-form-input
                    id="passwordRep"
                    v-model="passwordRep"
                    type="password"
                    required
                    placeholder="repeat password"
                    size="sm"
                    :state="passMatch"
                    @focus="hideError"
                  ></b-form-input>
                </b-form-group>
              </b-form>
            </div>
            <b-button
              @click="signUpForm"
              :disabled="!allFilled"
              size="sm"
              class="mt-2 modal-button"
              >SignUp</b-button
            >
          </b-tab>
          <b-tab title="Login">
            <div class="login-wrap">
              <b-form>
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="email"
                  description="We'll never share your email with anyone else."
                  label-size="sm"
                >
                  <b-form-input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    placeholder="Enter email"
                    size="sm"
                    :state="validateEmail"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="password:"
                  label-for="password"
                  label-size="sm"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                    placeholder="Enter password"
                    size="sm"
                    :state="passLength"
                  ></b-form-input>
                </b-form-group>
              </b-form>
              <b-button @click="loginForm" :disabled="!loginBtnDisableed" size="sm" class="mt-2"
                >Login</b-button
              >
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </b-modal>
    <b-button @click="showModal" v-show="!isLoggedIn">Login</b-button>
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
    passLength() {
      return this.password.length === 0 ? null : this.password.length > 3;
    },
    allFilled() {
      const allGood = this.passMatch && this.validateEmail;
      return Boolean((this.password && this.email && allGood));
    },
    loginBtnDisableed() {
      return Boolean((this.password && this.email));
    },
    validateEmail() {
      // eslint-disable-next-line no-useless-escape
      const emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return emailValidator.test(this.email);
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
>>> .auth-modal-content {
  background-color: #262522;
  border-color: green;
  color: #fff;
}
>>> .nav-link {
  color: #fff;
}
>>> .nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border-color: green;
}
>>> .nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  background-color: green;
  border-color: green;
  color: #fff;
}
>>> .nav-tabs {
  border-bottom-color: green;
}
>>> .close {
  color: #1df519;
  opacity: unset;
}
>>> .close:hover {
  color: #1df519;
}
>>> .text-muted {
  color: green !important;
}
.error {
  font-size: 13px;
  color: red;
}
.sign-up-wrap,
.login-wrap {
  text-align: start;
}
.sign-up-wrap >>> .col-form-label-sm {
  padding: 0px;
}
.form-group {
  margin-bottom: 0;
}
.form-group >>> label {
  margin-bottom: 3px;
}
</style>
