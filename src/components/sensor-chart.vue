<template>
  <section class="sensor-chart">
    <div class="chartContainer">
      <canvas id="chartCanvas"></canvas>
    </div>
  </section>
</template>

<script>
import Chart from 'chart.js';
import chartUtils from '../utils/chartJsUtils';

export default {
  name: 'sensor-chart',
  props: {
    sensorData: [Object, Function],
  },
  data: () => ({
    myChart: Object,
    dataSet: [],
  }),
  mounted() {
    console.log('Mounted');
    this.prepareData();
    this.createChart();
  },
  watch: {
    sensorData: ['propChage', 'prepareData', 'createChart', 'updateChart'],
  },
  methods: {
    propChage() {
      console.log('prop change!!!!');
    },
    prepareData() {
      console.log('Prepare Data');
      if (!this.sensorData.SensorData) {
        console.log('no sensor data!!!!');
        this.sensorData.SensorData = [];
      }
      this.sensorData.SensorData.forEach((element) => {
        const dataPoint = {
          x: new Date(element.TimeStamp * 1000),
          y: element.Value,
        };
        this.dataSet.push(dataPoint);
      });
      this.dataSet.sort((a, b) => ((a.x > b.x) ? 1 : -1));
      console.log(this.dataSet);
    },
    createChart() {
      console.log('create chart');
      console.log('chart utilssss');
      console.log(chartUtils.chartConfig);
      const ctx = document.getElementById('chartCanvas');
      chartUtils.chartConfig.options = chartUtils.options;
      chartUtils.chartConfig.data.datasets[0].data = this.dataSet;
      chartUtils.chartConfig.options.scales.yAxes[0].scaleLabel.labelString = this.sensorData.SensorData[0].Unit;
      this.myChart = new Chart(ctx, chartUtils.chartConfig);
      Chart.defaults.global.defaultFontSize = 18;
      this.myChart.update();
    },
    updateChart() {
      console.log('UpdateChart');
      this.myChart.update();
    },
  },
};
</script>

<style>

</style>
