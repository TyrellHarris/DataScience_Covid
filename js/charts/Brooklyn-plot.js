// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterChart4");
var neighborhoods = ["Dumbo", "Brooklyn Heights", "Cobble Hill", "Downtown Brooklyn", "Fort Greene", "Brighton Beach", "Sunset Park", "Gravesend", "Borough Park", "East New York", "Dumbo", "Brooklyn Heights", "Cobble Hill", "Downtown Brooklyn", "Fort Greene", "Brighton Beach", "Sunset Park", "Gravesend", "Borough Park", "East New York", "Dumbo", "Brooklyn Heights", "Cobble Hill", "Downtown Brooklyn", "Fort Greene", "Brighton Beach", "Sunset Park", "Gravesend", "Borough Park", "East New York", "Dumbo", "Brooklyn Heights", "Cobble Hill", "Downtown Brooklyn", "Fort Greene", "Brighton Beach", "Sunset Park", "Gravesend", "Borough Park", "East New York"];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: neighborhoods,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
            x: 3.4, y: 207079.0,
          }, {
            x: 6.9, y: 143408.0,
          }, {
            x: 5.9, y: 158037.0,
          }, {
            x: 15.7, y: 145166.0,
          }, {
            x: 49.3, y: 76771.0,
          }, {
            x: 2.2, y: 41754.0,
          }, {
            x: .6, y: 53198.0
          }, {
            x: 6.3, y: 56025.0
          }, {
            x: 1.2, y: 44664.0
          }, {
            x: 91.8, y:38154.0
          },
          {
            x: 83.9, y: 207079.0,
          }, {
            x: 81.6, y: 143408.0,
          }, {
            x: 84.5, y: 158037.0,
          }, {
            x: 63.8, y: 145166.0,
          }, {
            x: 34.7, y: 76771.0,
          }, {
            x: 91.1, y: 41754.0,
          }, {
            x: 29.4, y: 53198.0
          }, {
            x: 54.41, y: 56025.0
          }, {
            x: 67.4, y: 44664.0
          }, {
            x: 5.4, y:38154.0
          },
          {
            x: 6.9, y: 207079.0,
          }, {
            x: 8, y: 143408.0,
          }, {
            x: 13.1, y: 158037.0,
          }, {
            x: 10.9, y: 145166.0,
          }, {
            x: 25.3, y: 76771.0,
          }, {
            x: 8.9, y: 41754.0,
          }, {
            x: 94.1, y: 53198.0
          }, {
            x: 21.5, y: 56025.0
          }, {
            x: 15.1, y: 44664.0
          }, {
            x: 34.2, y:38154.0
          },
          {
            x: 12.6, y: 207079.0,
          }, {
            x: 11.5, y: 143408.0,
          }, {
            x: 9.5, y: 158037.0,
          }, {
            x: 20.5, y: 145166.0,
          }, {
            x: 16.0, y: 76771.0,
          }, {
            x: 6.7, y: 41754.0,
          }, {
            x: 64.7, y: 53198.0
          }, {
            x: 39.2, y: 56025.0
          }, {
            x: 31.4, y: 44664.0
          }, {
            x: 2.7, y:38154.0
          },
        ]
       }]
    },
    options: {
       tooltips: {
          callbacks: {
             label: function(tooltipItem, data) {
                var label = data.labels[tooltipItem.index];
                return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
             }
          }
       },
       legend: {
           display: false,
       },
       scales: {
        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Percentage of Neighborhood Population'
       }}],
        yAxes: [{
           scaleLabel: {
               display: true,
               labelString: "Neighborhood's Household Median Income"
           }
       }]
    }
    }
 });