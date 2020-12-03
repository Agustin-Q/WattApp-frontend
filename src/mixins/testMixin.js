const myMixin = {
  data() {
    return {
      API_LOGIN_URL: `${process.env.VUE_APP_BACKEND_URL}/api/auth/login`,
    };
  },
  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log('hello from mixin!');
    },
    checkValidToken() {
      console.log('CheckValidToken');
      fetch(this.API_LOGIN_URL, {
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
          console.log(result);
          console.log('Clear token from localStorage and redirect to login');
          this.logout();
        }
      });
    },
    logout() {
      console.log('clearToken');
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
export default myMixin;
