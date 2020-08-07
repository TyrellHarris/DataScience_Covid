// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterChart3");
var neighborhoods = ["Forest Hills", "Malba", "Neponsit", "Fresh Meadows", "Belle Harbor", "Elmhurst", "Jamaica", "Sunnyside", "Flushing", "Corona", "Forest Hills", "Malba", "Neponsit", "Fresh Meadows", "Belle Harbor", "Elmhurst", "Jamaica", "Sunnyside", "Flushing", "Corona", "Forest Hills", "Malba", "Neponsit", "Fresh Meadows", "Belle Harbor", "Elmhurst", "Jamaica", "Sunnyside", "Flushing", "Corona", "Forest Hills", "Malba", "Neponsit", "Fresh Meadows", "Belle Harbor", "Elmhurst", "Jamaica", "Sunnyside", "Flushing", "Corona"];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: neighborhoods,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
            x: 3.2, y: 84157.0,
          }, {
            x: 1.8, y: 83951.0,
          }, {
            x: 0, y: 156907.0,
          }, {
            x: 7.2, y: 81117.0,
          }, {
            x: 1.1, y: 122076.0,
          }, {
            x: 3.4, y: 54371.0,
          }, {
            x: 73.6, y: 60938.0
          }, {
            x: 1.8, y: 63568.0
          }, {
            x: 6.3, y: 54381.0
          }, {
            x: 40, y:51772.0
          },
          {
            x: 52, y: 84157.0,
          }, {
            x: 66.5, y: 83951.0,
          }, {
            x: 97.9, y: 156907.0,
          }, {
            x: 32.5, y: 81117.0,
          }, {
            x: 96.7, y: 122076.0,
          }, {
            x: 16.9, y: 54371.0,
          }, {
            x: 20.8, y: 60938.0
          }, {
            x: 52.7, y: 63568.0
          }, {
            x: 18.8, y: 54381.0
          }, {
            x: 16.7, y:51772.0
          },
          {
            x: 19.1, y: 84157.0,
          }, {
            x: 26.4, y: 83951.0,
          }, {
            x: 4.2, y: 156907.0,
          }, {
            x: 14.5, y: 81117.0,
          }, {
            x: 7.5, y: 122076.0,
          }, {
            x: 67.7, y: 54371.0,
          }, {
            x: 27.8, y: 60938.0
          }, {
            x: 21.2, y: 63568.0
          }, {
            x: 21.2, y: 54381.0
          }, {
            x: 229.9, y:51772.0
          },
          {
            x: 26.5, y: 84157.0,
          }, {
            x: 31.6, y: 83951.0,
          }, {
            x: 2.1, y: 156907.0,
          }, {
            x: 60.2, y: 81117.0,
          }, {
            x: 2.2, y: 122076.0,
          }, {
            x: 79.7, y: 54371.0,
          }, {
            x: 23.6, y: 60938.0
          }, {
            x: 45.5, y: 63568.0
          }, {
            x: 74.9, y: 54381.0
          }, {
            x: 43.5, y:51772.0
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