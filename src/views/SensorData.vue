<template>
  <section>
    <h1>📊 Sensor Data 📈</h1>
    <h2>{{$route.query.sensor}}</h2>
  </section>
</template>

<script>

export default {
  mounted() {
    this.test();
  },
  methods: {
    test() {
      console.log('test sensors');
    },
  },
};

</script>

<style >

</style>
