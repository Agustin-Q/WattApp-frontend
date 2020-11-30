<template>
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem; margin: auto">
      <div class="card-header">Device</div>
      <div class="card-body">
        <h4 class="card-title">{{device.DeviceName}}</h4>
        <p class="card-text">{{device.DeviceDescription}}</p>
        <p class="card-text">Device Key:
          <input :value="device.DeviceKey">
        </p>
        <button type="button" v-on:click="generateDeviceKey()" class="btn btn-danger" style="margin:10px">💀Generate Key💀</button>
        <button v-on:click="copySensorKey()" type="submit" class="btn btn-secondary" style="margin:10px">📋Copy to Clipboard📋
        </button>
        <hr>
        <sensor v-for="sensor in device.Sensors" v-bind:key="sensor.Name" v-bind:sensor="sensor">
        </sensor>
        <new-sensor v-bind:deviceName="device.DeviceName" v-on:newSensor="onNewSensor"></new-sensor>
      </div>
    </div>
</template>

<script>
import sensorComponent from './sensor.vue';
import newSensorComponent from './new-sensor.vue';

const API_DEVICE_KEY = `${process.env.VUE_APP_BACKEND_URL}/api/manage/DeviceKey`;
export default {
  name: 'device',
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
      }).then((res) => {
        if (res.ok) {
          console.log('New device response ok, continue to parse json.');
          return res.json();
        }
        return res.json().then((result) => {
          console.log('Response error!');
          throw new Error(result.message);
        });
      }).then((result) => {
        console.log('generate device key');
        console.log(result);
        this.device.DeviceKey = result.DeviceKey;
      }).catch((err) => {
        console.log('Error fetching Sensor Key!');
        console.log(err);
      });
    },
    copySensorKey() {
      console.log('Copy Sensor Key');
      console.log(this.device.DeviceKey);
      const temp = document.createElement('textarea');
      document.body.appendChild(temp);
      temp.value = this.device.DeviceKey;
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    },
    onNewSensor(newSensor) {
      this.device.Sensors.push(newSensor);
    },
  },
  components: {
    sensor: sensorComponent,
    'new-sensor': newSensorComponent,
  },
};
</script>

<style >
input {
border: 0px;
border-radius: 0.25rem;
width: 8rem;
text-align: center;
}

.sensor{
  border-radius: 0.25rem;
  margin: 0.5rem;
  background-color: #ffffff77;
  text-align: center;
  padding: 0.5rem;
}
.sensor-info-card{
  overflow:hidden;
}
.sensor-info-pane{
  float: left;
  width: 50%;
  align-content: center;
}
</style>
