// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("pieSpeed").getContext('2d');
var pieSpeed = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Hispanic", "Non-Hispanic"],
    datasets: [{
      backgroundColor: [
        "#ffff00",
        "#34495e"
      ],
      data: [30.5,69.5]
    }]
  }
});