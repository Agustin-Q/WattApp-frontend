<template>
<div>
  <h1>Login 😎</h1>
<div v-if="successMessage" class="alert alert-dismissible alert-success">
  <button v-on:click="closeSuccessMessage" type="button" class="close" data-dismiss="alert">&times;</button>
  {{successMessage}}
</div>
<div v-if="errorMessage" class="alert alert-dismissible alert-danger">
  <button v-on:click="closeErrorMessage" type="button" class="close" data-dismiss="alert">&times;</button>
 {{errorMessage}}
</div>
<form @submit.prevent = "login">
  <fieldset>
    <div class="form-group">
      <input
      v-model="user.username"
      type="text"
      class="form-control"
      id="username"
      aria-describedby="usernamelHelp"
      placeholder="Enter User Name" required>
      <small id="usernameHelp" class="form-text text-muted">
          Enter your user name!
      </small>
    </div>
    <div class="form-group">
      <input
      v-model="user.password"
      type="password"
      class="form-control"
      id="password"
      placeholder="Password" required>
      <small id="passwordHelp" class="form-text text-muted">
          Enter your password!
      </small>
    </div>
    <button type="submit" class="btn btn-primary">Log In
      <span v-if="loading" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      <span v-if="loading" class="sr-only">Loading...</span>
    </button>
  </fieldset>
</form>
</div>

</template>

<script>
import Joi from 'joi';

const LOGIN_URL = 'http://192.168.0.249:3000/api/auth/login';

const createUserSchema = Joi.object({
  username: Joi
    .string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi
    .string()
    .trim()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
    .required(),
});
export default {
  data: () => ({
    errorMessage: '',
    successMessage: '',
    loading: false,
    user: {
      username: '',
      password: '',
    },
  }),
  methods: {
    login() {
      this.closeMessages();
      console.log('Login! ', this.user.username, ', pass: ', this.user.password);
      if (this.validUser()) {
        console.log('valid user!');
        const body = {
          UserName: this.user.username,
          Secret: this.user.password,
        };
        this.loading = true;
        fetch(LOGIN_URL, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'content-type': 'application/json',
          },
        }).then((response) => {
          console.log('Respopnse!!!!');
          console.log(response);
          if (response.ok) {
            // user send valid data, recieved a token
            return response.json().then((res) => {
              this.successMessage = 'Login successful. 🤩';
              console.log('response ok!!!!!');
              this.loading = false;
              console.log(res);
              // store token in localstore
              localStorage.token = res.token;
              // redirect to "dashboard"
              this.$router.push('/dashboard');
            });
          }
          return response.json().then((res) => {
            console.log('response not ok!!!!');
            console.log(res);
            this.loading = false;
            throw new Error(res.message);
          });
        }).catch((error) => {
          console.log('error!!!!!!');
          this.loading = false;
          this.errorMessage = `Ups! something went wrong 😞. ${error}`;
          console.log(error);
        });
      }
    },

    validUser() {
      this.errorMessage = '';
      const schemaResult = createUserSchema.validate(this.user);
      if (schemaResult.error) {
        // schema validation error
        console.log(schemaResult);
        if (schemaResult.error.message.includes('password')) {
          // shcema validation error in password
          this.errorMessage = 'Invalid password 🙈';
          this.loading = false;
        } else if (schemaResult.error.message.includes('username')) {
          // schema validation error in username
          this.errorMessage = 'Invalid username 😭';
          this.loading = false;
        }
        return false;
      }
      // if no error return true
      return true;
    },

    closeMessages() {
      this.closeErrorMessage();
      this.closeSuccessMessage();
    },

    closeErrorMessage() {
      this.errorMessage = '';
    },

    closeSuccessMessage() {
      this.successMessage = '';
    },
  },
};
</script>

<style >

</style>
