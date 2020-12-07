<template>
  <section>
    <h1>📊 Sensor Data 📈</h1>
    <h2>{{$route.query.SensorName}}</h2>
    <sensor-chart v-bind:sensorData="sensorData"></sensor-chart>
  </section>
</template>

<script>
import sensorChart from '../components/sensor-chart.vue';

const API = `${process.env.VUE_APP_BACKEND_URL}/api/`;
export default {
  data: () => ({
    sensorData: Object,
  }),
  mounted() {
    this.getSensorData();
  },
  methods: {
    getSensorData() {
      console.log('test sensors');
      console.log(this.$route);
      const queryString = this.$route.fullPath.split('?')[1];
      console.log(`${API}?${queryString}`);
      fetch(`${API}?${queryString}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).then((res) => res.json()).then((json) => {
        console.log('Response json');
        console.log(json);
        this.sensorData = json;
      }).catch((err) => {
        console.log('Fetch error!');
        console.log(err);
      });
    },
  },
  components: {
    'sensor-chart': sensorChart,
  },
};

</script>

<style >

</style>
