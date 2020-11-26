<template>
  <div>
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
      <div class="card-header">Device</div>
      <div class="card-body">
        <h4 class="card-title">{{device.DeviceName}}</h4>
        <p class="card-text">Description: {{device.DeviceDescription}}</p>
        <p class="card-text">Device Key: {{device.DeviceKey}}</p>
        <button type="button" v-on:click="generateDeviceKey()" class="btn btn-danger">💀Generate Key💀</button>
        <hr>
        <p class="card-text" v-for="sensor in device.Sensors" v-bind:key="sensor.Name">Sensor Name: {{sensor.SensorName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
const API_DEVICE_KEY = `${process.env.VUE_APP_BACKEND_URL}/api/manage/DeviceKey`;
export default {
  name: 'test-component',
  props: {
    device: Object,
  },
  methods: {
    generateDeviceKey() {
      fetch(API_DEVICE_KEY, {
        method: 'POST',
        body: JSON.stringify({ DeviceName: this.device.DeviceName }),
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).then((res) => res.json()).then((result) => {
        console.log('generate device key');
        console.log(result);
        this.device.DeviceKey = result.DeviceKey;
      }).catch((err) => {
        console.log('Error fetching Sensor Key!');
        console.log(err);
      });
    },
  },
};
</script>
