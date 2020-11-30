<template>
  <div>
    <button v-if="!addingNewDevice" v-on:click="addingNewDevice = true" class="plus-button"></button>
    <div v-if="addingNewDevice" class="card text-white bg-secondary mb-3" style="max-width: 20rem; margin: auto">
      <div v-if="errorMsg" class="alert alert-dismissible alert-danger" style="margin: 0.5rem;">
      <button type="button" v-on:click="errorMsg = ''" class="close" data-dismiss="alert">&times;</button>
      <strong>Oh snap!</strong> Something went wrong 😢. {{errorMsg}}
    </div>
      <div class="card-header">Create New Device</div>
      <div class="card-body">
        <form @submit.prevent = "createDevice">
          <fieldset>
            <h4 class="card-title">Name:</h4>
            <input
              v-model="device.name"
              type="text"
              class="form-control"
              id="deviceName"
              required>
            <p class="card-text">Descripcion:</p>
              <textarea
              v-model="device.description"
              type="text"
              class="form-control"
              id="deviceDescription"
              required/>
              <button type="submit" class="btn btn-primary">Create Device
              </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const API_MANAGE_DEVICE = `${process.env.VUE_APP_BACKEND_URL}/api/manage/devices`;
export default {
  name: 'new-device',
  data: () => ({
    device: {
      name: '',
      description: '',
    },
    addingNewDevice: false,
    errorMsg: '',
  }),
  methods: {
    createDevice() {
      console.log('create device!');
      console.log(this.device.name);
      console.log(this.device.description);
      const body = {
        DeviceName: this.device.name,
        DeviceDescription: this.device.description,
      };
      fetch(API_MANAGE_DEVICE, {
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
        this.$emit('newDevice', result);
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
      this.device.name = '';
      this.device.description = '';
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
