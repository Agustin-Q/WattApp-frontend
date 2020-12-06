<template>
  <section>
    <h1>📊 Sensor Data 📈</h1>
    <h2>{{$route.query.sensor}}</h2>
  </section>
</template>

<script>
const API = `${process.env.BACKEND_URL}/api/`;
export default {
  mounted() {
    this.test();
  },
  methods: {
    test() {
      console.log('test sensors');
      fetch(API, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }).then((res) => res.json()).then((json) => {
        console.log('Response json');
        console.log(json);
      }).catch((err) => {
        console.log('Fetch error!');
        console.log(err);
      });
    },
  },
};

</script>

<style >

</style>
