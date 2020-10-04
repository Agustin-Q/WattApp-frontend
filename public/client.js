/* jshint esversion: 8 */
console.log("WhattApp Client");
document.addEventListener("DOMContentLoaded", ready);

var graphData = [];
let averageGraphData = [];
let serverData = [];
let firstTimeStamp = Date.now()/1000-10;

async function getData() {
  console.log("Geting Data...");

  if (serverData.length == 0){
    lastTimeStamp = firstTimeStamp;
  } else{
    lastTimeStamp = serverData[serverData.length-1].TimeStamp;
  }
  const response = await fetch("/api?fromTime=" + lastTimeStamp);
  const data = await response.json();
  //displayKWH(calculateKWH(data));
  serverData = serverData.concat(data);
  for (var item of data) {
    var date = new Date();
    date.setTime(item.TimeStamp*1000);
    graphData.push({
      x: date,
      y: item.Power
    });
  }
  //console.log(graphData);
}





async function ready() {
  moment().format('dddd');
  await getData();
  createChart();
  //displayKWH(calculateKWH(graphData));
  console.log(graphData);
  displayKWH(calculateKWH(serverData));
  myChart.update();
}

setInterval(updateData, 2000);
async function updateData(){
  console.log("updateing data...");
  await getData();
  myChart.data.datasets.forEach((dataset) => {
        dataset.data = graphData;
    });
    displayKWH(calculateKWH(serverData));
  myChart.update(500);

}

function calculateKWH(data){
  let sum = 0;
  for (let i = 0; i < data.length -1; i++){
    let timeStep = Math.abs(data[i+1].TimeStamp - data[i].TimeStamp);
    let kwh = data[i].Power*timeStep/(1000*3600.0);
    sum+=kwh;
  }
return sum;
}

function displayKWH(kwh){
  document.getElementById("kwh").innerHTML = "" + kwh.toFixed(5) + "kWh";
}

function calculateAverageGraphData(){
  let averageCount = 5;
  averageGraphData=[];
  for (let i = averageCount; i<graphData.length; i++){
    let sum = 0;
    for (let j = 0; j< averageCount;j++){
      sum += graphData[i-j].y;
    }
    let average = sum/averageCount;
    averageGraphData.push({
      x: graphData.x,
      y: average
    });
  }
}

//------------------------
//char config
let myChart;
function createChart() {
  var timeFormat = 'MM/DD/YYYY HH:mm';
  var ctx = document.getElementById("myChart");
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Power',
        data: graphData,
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
          },
          scaleLabel: {
            display: true,
            labelString: "Watts",
            fontFamily:"Segoe UI Light",
            fontSize: 30
          },
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
            labelString: 'Date',
            fontFamily:"Segoe UI Light",
            fontSize: 30
          }
        }],
      }
    }
  });
}
