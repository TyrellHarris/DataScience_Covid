// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterChart4");
var neighborhoods = ["Dumbo", "Brooklyn Heights", "Cobble Hill", "Downtown Brooklyn", "Fort Greene", "Brighton Beach", "Sunset Park", "Gravesend", "Borough Park", "East New York", "Dumbo", "Brooklyn Heights", "Cobble Hill", "Downtown Brooklyn", "Fort Greene", "Brighton Beach", "Sunset Park", "Gravesend", "Borough Park", "East New York", "Dumbo", "Brooklyn Heights", "Cobble Hill", "Downtown Brooklyn", "Fort Greene", "Brighton Beach", "Sunset Park", "Gravesend", "Borough Park", "East New York", "Dumbo", "Brooklyn Heights", "Cobble Hill", "Downtown Brooklyn", "Fort Greene", "Brighton Beach", "Sunset Park", "Gravesend", "Borough Park", "East New York"];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red','green', 'green', 'green','green','green','green','green','green','green','green','yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: neighborhoods,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
            x: 3.2, y: 207079.0,
          }, {
            x: 6.9, y: 143408.0,
          }, {
            x: 5.9, y: 158037.0,
          }, {
            x: 14.1, y: 145166.0,
          }, {
            x: 39.3, y: 76771.0,
          }, {
            x: 2.0, y: 41754.0,
          }, {
            x: 3.0, y: 53198.0
          }, {
            x: 5.2, y: 56025.0
          }, {
            x: 1.0, y: 44664.0
          }, {
            x: 68.3, y:38154.0
          },
          {
            x: 78.9, y: 207079.0,
          }, {
            x: 75.5, y: 143408.0,
          }, {
            x: 74.5, y: 158037.0,
          }, {
            x: 57.6, y: 145166.0,
          }, {
            x: 27.7, y: 76771.0,
          }, {
            x: 83.7, y: 41754.0,
          }, {
            x: 15.2, y: 53198.0
          }, {
            x: 44.8, y: 56025.0
          }, {
            x: 58.6, y: 44664.0
          }, {
            x: 4.1, y:38154.0
          },
          {
            x: 6.5, y: 207079.0,
          }, {
            x: 7.5, y: 143408.0,
          }, {
            x: 11.5, y: 158037.0,
          }, {
            x: 9.8, y: 145166.0,
          }, {
            x: 20.2, y: 76771.0,
          }, {
            x: 8.2, y: 41754.0,
          }, {
            x: 48.5, y: 53198.0
          }, {
            x: 17.7, y: 56025.0
          }, {
            x: 13.4, y: 44664.0
          }, {
            x: 25.5, y:38154.0
          },
          {
            x: 11.8, y: 207079.0,
          }, {
            x: 10.6, y: 143408.0,
          }, {
            x: 8.4, y: 158037.0,
          }, {
            x: 18.5, y: 145166.0,
          }, {
            x: 12.8, y: 76771.0,
          }, {
            x: 6.2, y: 41754.0,
          }, {
            x: 33.3, y: 53198.0
          }, {
            x: 32.3, y: 56025.0
          }, {
            x: 27.3, y: 44664.0
          }, {
            x: 2, y:38154.0
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