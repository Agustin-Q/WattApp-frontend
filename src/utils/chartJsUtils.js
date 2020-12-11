const chartConfig = {
  type: 'line',
  data: {
    datasets: [{
      label: '# of Votes',
      backgroundColor: '#50',
      borderWidth: 0,
      pointBackgroundColor: '#cccccc',
      pointBorderWidth: 0,
      pointRadius: 0,
      pointHoverRadius: 4,
      borderColor: '#00000000',
      lineTension: 0.3,
    }],
  },
};

const options = {
  hover: {
    intersect: false,
    axis: 'x',
  },
  tooltips: {
    mode: 'index',
    intersect: false,
    caretSize: 10,
  },
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      type: 'time',
      gridLines: {
        display: false,
      },
      scaleLabel: {
        display: true,
        labelString: 'Date',
        fontSize: 16,
      },
      ticks: {
        padding: 1,
        maxRotation: 0,
        autoSkipPadding: 200,
        // fontSize: 16,
      },
    }],
    yAxes: [{
      gridLines: {
        display: false,
      },
      scaleLabel: {
        display: true,
        labelString: 'unit',
        fontSize: 16,
      },
      ticks: {
        beginAtZero: true,
        autoSkipPadding: 200,
      },
    }],
  },
};

const chartUtils = {
  chartConfig,
  options,
};

export default chartUtils;
