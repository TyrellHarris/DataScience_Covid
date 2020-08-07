// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterChart5");
var neighborhoods = ['Todt Hill', 'Richmond Hill', 'Emerson Hill', "Prince's Bay",'Arden Heights', 'Stapleton', 'Park Hill', 'Port Richmond','Arlington', 'New Brighton', 'Todt Hill', 'Richmond Hill', 'Emerson Hill', "Prince's Bay",
'Arden Heights', 'Stapleton', 'Park Hill', 'Port Richmond',
'Arlington', 'New Brighton', 'Todt Hill', 'Richmond Hill', 'Emerson Hill', "Prince's Bay",
'Arden Heights', 'Stapleton', 'Park Hill', 'Port Richmond',
'Arlington', 'New Brighton', 'Todt Hill', 'Richmond Hill', 'Emerson Hill', "Prince's Bay",
'Arden Heights', 'Stapleton', 'Park Hill', 'Port Richmond',
'Arlington', 'New Brighton']; 
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red','green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green','yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: neighborhoods,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
            x: 0, y: 121990.0,
          }, {
            x: 16, y: 70808.0,
          }, {
            x: 4.1, y: 97998.0,
          }, {
            x: 1, y: 110737.0,
          }, {
            x: 2, y: 92096.0,
          }, {
            x: 28.7, y: 59536.0,
          }, {
            x: 41.5, y: 60094.0
          }, {
            x: 23, y: 61001.0
          }, {
            x: 26.1, y: 43730.0
          }, {
            x: 38.7, y:68909.0
          },
          {
            x: 84.9, y: 121990.0,
          }, {
            x: 9.9, y: 70808.0,
          }, {
            x: 56.7, y: 97998.0,
          }, {
            x: 89.9, y: 110737.0,
          }, {
            x: 77.8, y: 92096.0,
          }, {
            x: 36.2, y: 59536.0,
          }, {
            x: 12.1, y: 60094.0
          }, {
            x: 23, y: 61001.0
          }, {
            x: 47.8, y: 43730.0
          }, {
            x: 23.7, y:68909.0
          },
          {
            x: 5.1, y: 121990.0,
          }, {
            x: 37, y: 70808.0,
          }, {
            x: 9.3, y: 97998.0,
          }, {
            x: 6.1, y: 110737.0,
          }, {
            x: 12.1, y: 92096.0,
          }, {
            x: 29.8, y: 59536.0,
          }, {
            x: 38.34, y: 60094.0
          }, {
            x: 47, y: 61001.0
          }, {
            x: 18.5, y: 43730.0
          }, {
            x: 33.3, y:68909.0
          },
          {
            x: 10.1, y: 121990.0,
          }, {
            x: 37, y: 70808.0,
          }, {
            x: 28.9, y: 97998.0,
          }, {
            x: 3, y: 110737.0,
          }, {
            x: 8.1, y: 92096.0,
          }, {
            x: 5.3, y: 59536.0,
          }, {
            x: 8.1, y: 60094.0
          }, {
            x: 7, y: 61001.0
          }, {
            x: 8.5, y: 43730.0
          }, {
            x: 4.3, y:68909.0
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