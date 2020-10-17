<template>
<div>
<h1>Sign Up</h1>
<div v-if="successMessage" class="alert alert-dismissible alert-success">
  <button v-on:click="closeSuccessMessage" type="button" class="close" data-dismiss="alert">&times;</button>
  {{successMessage}}
</div>
<div v-if="errorMessage" class="alert alert-dismissible alert-danger">
  <button v-on:click="closeErrorMessage" type="button" class="close" data-dismiss="alert">&times;</button>
 {{errorMessage}}
</div>
<form @submit.prevent = "signup">
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
          User Name must be at least 2 characters long.
      </small>
    </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <input
      v-model="user.password"
      type="password"
      class="form-control"
      id="password"
      placeholder="Password" required>
      <small id="passwordHelp" class="form-text text-muted">
          Password must be at least 8 characters long.
      </small>
    </div>
    <div class="form-group col-md-6">
      <input
      v-model="user.confirmPassword"
      type="password"
      class="form-control"
      id="confirmPassword"
      placeholder="Confirm Password" required>
      <small id="confirmPasswordHelp" class="form-text text-muted">
          Please confirm password.
      </small>
    </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit
      <span v-if="loading" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      <span v-if="loading" class="sr-only">Loading...</span>
    </button>
  </fieldset>
</form>
</div>

</template>

<script>
import Joi from 'joi';

const SIGNUP_URL = 'http://192.168.0.249:3000/api/auth/create_user';

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
  confirmPassword: Joi
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
      confirmPassword: '',
    },
  }),
  methods: {
    signup() {
      console.log('submited!');
      console.log(this.user);
      this.loading = true;
      if (this.validUser()) {
        // send data to server
        console.log('user validated');
        const body = {
          UserName: this.user.username,
          Secret: this.user.password,
        };

        fetch(SIGNUP_URL, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'content-type': 'application/json',
          },
        }).then((response) => {
          console.log(response);
          if (response.ok) {
            // aca se llega cuando esta ok
            this.successMessage = 'User created succesfully! 😄';
            this.loading = false;
            return response.json();
          }
          return response.json().then((miError) => {
            // aca se llega cuando hay un error del request,
            // el request llega al servidor y el servidor devuelve un error
            // miError es el response body en realidad
            console.log('aca solo llego cuando hay un error del request?');
            console.log(miError);
            // this.errorMessage = miError.message;
            this.loading = false;
            throw new Error(miError.message);
          });
        }).then((res) => {
          // aca se llega cuando parseamos el body en status.ok return resposne.json()
          console.log('aca se llega cuando esta ok, y parseamos el body');
          console.log(res);
          // guardar el tocken devuelto en localStorage
          localStorage.token = res.token;
          // time out and log redirect to signin
          setTimeout(() => {
            this.$router.push('/dashboard');
          }, 2000);
        }).catch((err) => {
          // aca llega cuando hay un error en el fetch o tiramos un error nostoros
          console.log('aca solo llego cuando no puedo llegar al servidor?');
          console.log(err);
          this.errorMessage = `Ups! Something went wrong 😟. ${err.message}`;
          // this.errorMessage = err.message;
          this.loading = false;
        });
      }
    },

    validUser() {
      this.errorMessage = '';
      if (this.user.password !== this.user.confirmPassword) {
        // passwords dont match!
        this.errorMessage = 'Passwords must match! 🔐';
        this.loading = false;
        return false;
      }
      const schemaResult = createUserSchema.validate(this.user);
      if (schemaResult.error) {
        // schema validation error
        console.log(schemaResult);
        if (schemaResult.error.message.includes('password')) {
          // shcema validation error in password
          this.errorMessage = 'Password must be at least 8 characters long. 🔐';
          this.loading = false;
        } else if (schemaResult.error.message.includes('username')) {
          // schema validation error in username
          this.errorMessage = 'Username must be at least 2 characters long and no special characters. ✌';
          this.loading = false;
        }
        return false;
      }
      // if no error return true
      return true;
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

<style>

</style>
