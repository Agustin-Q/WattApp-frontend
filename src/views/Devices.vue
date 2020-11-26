<template>
  <section>
    <h1>📡 Devices 📡</h1>
    <div style="text-align:center">
      <test-component
        v-for="device in devices"
        v-bind:key="device"
        v-bind:device="device"
      ></test-component>
    </div>
  </section>
</template>

<script>
// -------------componets------------
import testComponent from '../components/test-component.vue';

// -------------componets------------
// const API_LOGIN_URL = `${process.env.BACKEND_URL}/api/auth/login`;
// const API_SENSOR_KEY_URL = `${process.env.BACKEND_URL}/api/auth/sensorKey`;
const API_DEVICES = `${process.env.VUE_APP_BACKEND_URL}/api/manage/devices`;

export default {
  data: () => ({
    devices: [],
  }),
  mounted() {
    console.log('Backend URL: ', process.env.VUE_APP_BACKEND_URL);
    fetch(API_DEVICES, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then((res) => res.json()).then((result) => {
      console.log(result);
      this.devices = result;
    }).catch((err) => {
      console.log('Erorr!!!!!!');
      console.log(err);
    });
  },
  methods: {

  },
  components: {
    'test-component': testComponent,
  },
};
</script>

<style >

</style>
