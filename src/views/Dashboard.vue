<template>
  <section>
    <h1>📊 Dashboard 📈</h1>
    <h2 v-if="user.UserName">🎉Welcome {{user.UserName}}!!🎉</h2>
    <div style="margin:10px">
      <div>
        <router-link
          class="btn btn-primary button-wrapper"
          :to="{name:'Devices'}"
          role="button"
          >Manage Devices
        </router-link>
      </div>
      <div>
        <button
        v-on:click="logout()"
        type="submit"
        class="btn btn-primary button-wrapper"
        >Log Out
        </button>
        </div>
    </div>
  </section>
</template>

<script>
const API_LOGIN_URL = `${process.env.BACKEND_URL}/api/auth/login`;
export default {
  data: () => ({
    user: {},
    sensorKey: '',
  }),
  mounted() {
    fetch(API_LOGIN_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then((res) => res.json()).then((result) => {
      if (result.UserName) {
        console.log('Response has username, the client has sent valid token');
        console.log(result);
        this.user = result;
      } else {
        console.log('Response does not have username, client sent invalid token');
        console.log('Clear token from localStorage and redirect to login');
        this.logout();
      }
    });
  },
  methods: {
    logout() {
      console.log('clearToken');
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>

<style >
.button-wrapper {
margin: 5px
};
</style>
