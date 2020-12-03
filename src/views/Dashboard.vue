<template>
  <section>
    <h1>📊 Dashboard 📈</h1>
    <h2 v-if="user.UserName">🎉Welcome {{user.UserName}}!!🎉</h2>
    <div style="margin:10px">
      <div>
        <router-link
          class="btn btn-primary button-wrapper"
          :to="{name:'Devices'}"
          role="button"
          >Manage Devices
        </router-link>
      </div>
      <div>
        <button
        v-on:click="logout()"
        type="submit"
        class="btn btn-primary button-wrapper"
        >Log Out
        </button>
        </div>
    </div>
  </section>
</template>

<script>
import myMixin from '../mixins/testMixin';

export default {
  data: () => ({
    user: {},
    sensorKey: '',
  }),
  mounted() {
    this.checkValidToken();
  },
  methods: {

  },
  mixins: [myMixin],
};
</script>

<style >
.button-wrapper {
margin: 5px
}
</style>
