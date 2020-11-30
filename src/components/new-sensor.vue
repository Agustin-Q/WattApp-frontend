<template>
  <div>
    <button v-if="!addingNewDevice" v-on:click="addingNewDevice = true" class="plus-button" style="font-size:12px"></button>
    <div v-if="addingNewDevice">
      <div v-if="errorMsg" class="alert alert-dismissible alert-danger" style="margin: 0.5rem;">
        <button type="button" v-on:click="errorMsg = ''" class="close" data-dismiss="alert">&times;</button>
        <strong>Oh snap!</strong> Something went wrong 😢. {{errorMsg}}
      </div>
      <div class="sensor">
        <p class="card-text" style="text-align:center; margin:0rem">Create New Sensor</p>
        <hr style="margin:0.25rem">
        <div class="sensor-info-card">
          <div>
            <form @submit.prevent = "createSensor">
              <fieldset>
            <p class="card-text" style="margin:0">Name:</p>
            <input
              v-model="sensor.name"
              type="text"
              class="form-control"
              id="sensorName"
              required>
            <p class="card-text" style="margin:0">Type:</p>
            <input
              v-model="sensor.type"
              type="text"
              class="form-control"
              id="sensorType"
              required>
            <p class="card-text" style="margin:0">Unit:</p>
            <input
              v-model="sensor.unit"
              type="text"
              class="form-control"
              id="sensorUnit"
              required>
              <button type="submit" class="btn btn-primary">Add Sensor
              </button>
            </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_MANAGE_SENSOR = `${process.env.VUE_APP_BACKEND_URL}/api/manage/sensors`;
export default {
  name: 'new-sensor',
  props: {
    deviceName: String,
  },
  data: () => ({
    sensor: {
      name: '',
      type: '',
      unit: '',
    },
    addingNewDevice: false,
    errorMsg: '',
  }),
  methods: {
    createSensor() {
      console.log('create sensor!');
      console.log(this.deviceName);
      console.log(this.sensor);
      const body = {
        DeviceName: this.deviceName,
        SensorName: this.sensor.name,
        SensorType: this.sensor.type,
        SensorUnit: this.sensor.unit,
      };
      fetch(API_MANAGE_SENSOR, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }).then((res) => {
        console.log('el response');
        if (res.ok) {
          console.log('Response ok, continue to parse json');
          return res.json();
        }
        return res.json().then((result) => {
          console.log('Response not ok');
          console.log(result);
          throw new Error(result.message);
        });
      }).then((result) => {
        console.log('llegue al result');
        console.log(result);
        // send the response to parent component
        const newSensor = {
          SensorName: this.sensor.name,
          SensorType: this.sensor.type,
          SensorUnit: this.sensor.unit,
        };
        this.$emit('newSensor', newSensor);
        // reset to initial state
        this.reset();
      }).catch((err) => {
        console.log('error!!!!');
        console.log(err);
        // display error popup
        this.errorMsg = err.message;
      });
    },
    reset() {
      // hide create device card
      this.addingNewDevice = false;
      // clear variables, this aslo emptys text inputs
      this.sensor.name = '';
      this.sensor.type = '';
      this.sensor.unit = '';
    },
  },
};
</script>

<style >
input {
border: 0px;
border-radius: 0.25rem;
width: 8rem;
text-align: center;
margin-bottom: 10px;
}

textarea {
  margin-bottom: 10px;
}

  .plus-button {
  border: 2px solid lightgrey;
  background-color: #2c3e50;
  font-size: 32px;
  height: 2.5em;
  width: 2.5em;
  border-radius: 999px;
  position: relative;
}

  .plus-button::after,
  .plus-button::before {
    content: "";
    display: block;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .plus-button::before {
    height: 1em;
    width: 0.2em;
  }

  .plus-button::after {
    height: 0.2em;
    width: 1em;
  }
</style>
