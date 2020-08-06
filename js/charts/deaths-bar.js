// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barShape");
var barShape = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Queens", "Kings", "Bronx", "New York", "Richmond"],
    datasets: [{
      label: "Asian Covid Deaths per 100,000",
      backgroundColor: "#34495e",
      borderColor: "rgba(100,100,100,1)",
      data: [125.22, 98.02, 162.37, 69.62, 113.75],
    },
    {
      label: "White Covid Deaths per 100,000",
      backgroundColor: "#e74c3c",
      borderColor: "rgba(100,100,100,1)",
      data: [144.5, 148.63, 163.18, 62.69, 130.22], 
    },
    {
      label: "Hispanic Covid Deaths per 100,000",
      backgroundColor: "rgba(255,255,0,1)",
      borderColor: "rgba(100,100,100,1)",
      data: [311.23, 262.58, 266.01, 190.9, 205.29],
    },
    {
      label: "Black Covid Deaths per 100,000",
      backgroundColor: "#f1c40f",
      borderColor: "rgba(2,117,216,1)",
      data: [233.18, 232.82, 295.7, 221.63, 298.19],
    }]
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 350,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
