<template>
  <section class="sensor-chart">
    <p>Sensor Chart</p>
    <p>{{sensorData}}</p>
  </section>
</template>

<script>
export default {
  name: 'sensor-chart',
  props: {
    sensorData: Array,
  },
};
</script>

<style>
.sensor-chart{
  background-color: magenta;
}
</style>
