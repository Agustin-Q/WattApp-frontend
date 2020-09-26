/* jshint esversion: 8 */
console.log("WhattApp Client");
document.addEventListener("DOMContentLoaded", ready);


async function getData() {
  console.log("Geting Data...");
  const response = await fetch("/api");
  const data = await response.json();
  console.log(data);

  var graphData = [];
  for (var item of data) {
    var date = new Date();
    date.setTime(item.TimeStamp);
    graphData.push({
      x: date,
      y: item.Current
    });
  }

  drawGraph(graphData);

}

function drawGraph(data) {

}

function drawGraph(data) {
  var timeFormat = 'MM/DD/YYYY HH:mm';
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Current',
        data: data,
        pointRadius: 2,
        pointBorderWidth: 0,
        pointBackgroundColor: "rgba(120, 120, 120, 0.5)"
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontSize: 20,
            padding: 10,
            fontFamily:"Segoe UI Light"
          }
        }],
        xAxes: [{
          type: 'time',
          time: {
            parser: timeFormat,
            // round: 'day'
            tooltipFormat: 'll HH:mm'
          },
          ticks: {
            fontSize: 20,
            padding: 10,
            fontFamily:"Segoe UI Light"
          },
          scaleLabel: {
            display: true,
            labelString: 'Date'
          }
        }],
      }
    }
  });
}



function ready() {
  moment().format('dddd');
  getData();
}
