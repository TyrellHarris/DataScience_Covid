// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barColor");
var barColor = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Queens", "Kings", "Bronx", "New York", "Richmond"],
    datasets: [{
      label: "Asian Covid Cases per 100,000",
      backgroundColor: "#34495e",
      borderColor: "rgba(100,100,100,1)",
      data: [706.29, 483.37, 1305.14, 383.28, 704.85],
    },
    {
      label: "White Covid Cases per 100,000",
      backgroundColor: "#e74c3c",
      borderColor: "rgba(100,100,100,1)",
      data: [1101.50, 1079.43, 2004.79, 544.33, 1570.63], 
    },
    {
      label: "Hispanic Covid Cases per 100,000",
      backgroundColor: "rgba(255,255,0,1)",
      borderColor: "rgba(100,100,100,1)",
      data: [1693.68, 1004.30, 2065.08, 1057.80, 1417.64],
    },
    {
      label: "Black Covid Cases per 100,000",
      backgroundColor: "#f1c40f",
      borderColor: "rgba(2,117,216,1)",
      data: [1606.83, 1319.58, 2313.97, 1414.60, 2204.41],
    }

    ],
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
          max: 2500,
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
