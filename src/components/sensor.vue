<template>
  <div class="sensor">
    <p class="card-text" style="text-align: center; margin: 0rem">
      {{ sensor.SensorName }}
    </p>
    <hr style="margin: 0.25rem" />
    <div class="sensor-info-card">
      <div class="sensor-info-pane">
        <p class="card-text" style="margin: 0">Type: {{ sensor.SensorType }}</p>
        <p class="card-text" style="margin: 0">Unit: {{ sensor.SensorUnit }}</p>
      </div>
      <div class="sensor-info-pane">
        <button
          class="btn btn-secondary"
          style="
            margin: auto;
            background-color: #ffffff77;
            border-radius: 0.25rem;
            width: fit-content;
            padding: 0 0.25rem 0 0.25rem;
          "
          v-on:click="onClick()"
        >
          View Data<br />📈
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sensor',
  props: {
    sensor: Object,
  },
  methods: {
    onClick() {
      console.log(this.sensor.SensorName);
      const params = {
        SensorName: this.sensor.SensorName,
        fromTime: 0,
      };
      const qs = Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');
      this.$router.push(`/sensor-data?${qs}`);
    },
  },
};
</script>

<style >
.sensor {
  border-radius: 0.25rem;
  margin: 0.5rem;
  background-color: #ffffff9c;
  text-align: center;
  padding: 0.5rem;
}
.sensor-info-card {
  overflow: hidden;
}
.sensor-info-pane {
  float: left;
  width: 50%;
  align-content: center;
}
</style>
