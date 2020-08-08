// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterChart3");
var neighborhoods = ["Forest Hills", "Malba", "Neponsit", "Fresh Meadows", "Belle Harbor", "Elmhurst", "Jamaica", "Sunnyside", "Flushing", "Corona", "Forest Hills", "Malba", "Neponsit", "Fresh Meadows", "Belle Harbor", "Elmhurst", "Jamaica", "Sunnyside", "Flushing", "Corona", "Forest Hills", "Malba", "Neponsit", "Fresh Meadows", "Belle Harbor", "Elmhurst", "Jamaica", "Sunnyside", "Flushing", "Corona", "Forest Hills", "Malba", "Neponsit", "Fresh Meadows", "Belle Harbor", "Elmhurst", "Jamaica", "Sunnyside", "Flushing", "Corona"];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red','green','green','green','green','green','green','green','green','green','green','yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
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
            x: 6.2, y: 81117.0,
          }, {
            x: 1.1, y: 122076.0,
          }, {
            x: 2.0, y: 54371.0,
          }, {
            x: 58, y: 60938.0
          }, {
            x: 1.0, y: 63568.0
          }, {
            x: 5.1, y: 54381.0
          }, {
            x: 12.2, y:51772.0
          },
          {
            x: 58, y: 84157.0,
          }, {
            x: 52.5, y: 83951.0,
          }, {
            x: 93.9, y: 156907.0,
          }, {
            x: 28.5, y: 81117.0,
          }, {
            x: 89.7, y: 122076.0,
          }, {
            x: 10.1, y: 54371.0,
          }, {
            x: 2.2, y: 60938.0
          }, {
            x: 29.6, y: 63568.0
          }, {
            x: 15.5, y: 54381.0
          }, {
            x: 5, y:51772.0
          },
          {
            x: 18.8, y: 84157.0,
          }, {
            x: 20.9, y: 83951.0,
          }, {
            x: 4.0, y: 156907.0,
          }, {
            x: 12.6, y: 81117.0,
          }, {
            x: 7.0, y: 122076.0,
          }, {
            x: 40.4, y: 54371.0,
          }, {
            x: 21.8, y: 60938.0
          }, {
            x: 43.9, y: 63568.0
          }, {
            x: 17.5, y: 54381.0
          }, {
            x: 69.7, y:51772.0
          },
          {
            x: 27.1, y: 84157.0,
          }, {
            x: 25, y: 83951.0,
          }, {
            x: 2.0, y: 156907.0,
          }, {
            x: 52.6, y: 81117.0,
          }, {
            x: 2.0, y: 122076.0,
          }, {
            x: 47.4, y: 54371.0,
          }, {
            x: 18.5, y: 60938.0
          }, {
            x: 25.5, y: 63568.0
          }, {
            x: 61.9, y: 54381.0
          }, {
            x: 13.1, y:51772.0
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