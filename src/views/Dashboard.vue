<template>
  <section>
    <h1>📊 Dashboard 📈</h1>
    <h2 v-if="user.UserName">🎉Welcome {{user.UserName}}!!🎉</h2>
    <h2> Sensor Key 🔑:</h2>
    <h2 id="SensorKeyH" v-if="sensorKey"> {{sensorKey}} </h2>
    <div style="margin:10px">
    <button v-on:click="copySensorKey()" type="submit" class="btn btn-primary">📋Copy to Clipboard📋
    </button>
    </div>
    <div style="margin:10px">
    <button v-on:click="generateSensorKey()" type="submit" class="btn btn-primary">⚠💀Generatre New Sensor Key💀⚠
    </button>
    </div>
    <div style="margin:10px">
    <button v-on:click="logout()" type="submit" class="btn btn-primary">Log Out
    </button>
    </div>
  </section>
</template>

<script>
const API_LOGIN_URL = 'https://wattapp-backend.herokuapp.com/api/auth/login';
const API_SENSOR_KEY_URL = 'https://wattapp-backend.herokuapp.com/api/auth/sensorKey';
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
    this.getSensorKey();
    this.generateSensorKey();
  },
  methods: {
    logout() {
      console.log('clearToken');
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
    getSensorKey() {
      fetch(API_SENSOR_KEY_URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).then((res) => res.json()).then((result) => {
        console.log('get senosr key');
        console.log(result);
        this.sensorKey = result.SensorKey;
      }).catch((err) => {
        console.log('Error fetching Sensor Key!');
        console.log(err);
      });
    },
    generateSensorKey() {
      fetch(API_SENSOR_KEY_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).then((res) => res.json()).then((result) => {
        console.log('generate senosr key');
        console.log(result);
        this.sensorKey = result.SensorKey;
      }).catch((err) => {
        console.log('Error fetching Sensor Key!');
        console.log(err);
      });
    },
    copySensorKey() {
      console.log('Copy Sensor Key');
      const hs = document.getElementById('SensorKeyH');
      console.log(hs);
      const temp = document.createElement('textarea');
      document.body.appendChild(temp);
      temp.value = hs.innerText;
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    },
  },
};
</script>

<style >

</style>
