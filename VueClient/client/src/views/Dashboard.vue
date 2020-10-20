<template>
  <section>
    <h1>📊 Dashboard 📈</h1>
    <h2 v-if="user.UserName">🎉Welcome {{user.UserName}}!!🎉</h2>
    <button v-on:click="logout()" type="submit" class="btn btn-primary">Log Out
    </button>
  </section>
</template>

<script>
const API_URL = 'http://192.168.0.249:3000/api/auth/login';
export default {
  data: () => ({
    user: {},
  }),
  mounted() {
    fetch(API_URL, {
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

</style>
