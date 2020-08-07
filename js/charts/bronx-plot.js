// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterChart2");
var neighborhoods = ["Moris Park", "Spencer Estates-country club", "City Island", "Pelham Gardens", "Van Nest", "Mott Haven", "Highbridge", "Hunts Point", "Norwood", "University Heights","Moris Park", "Spencer Estates-country club", "City Island", "Pelham Gardens", "Van Nest", "Mott Haven", "Highbridge", "Hunts Point", "Norwood", "University Heights", "Moris Park", "Spencer Estates-country club", "City Island", "Pelham Gardens", "Van Nest", "Mott Haven", "Highbridge", "Hunts Point", "Norwood", "University Heights", "Moris Park", "Spencer Estates-country club", "City Island", "Pelham Gardens", "Van Nest", "Mott Haven", "Highbridge", "Hunts Point", "Norwood", "University Heights"];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: neighborhoods,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
            x: 13.8, y: 69631.0,
          }, {
            x: 1.4, y: 86869.0,
          }, {
            x: 0, y: 99932.0,
          }, {
            x: 28, y: 82974.0,
          }, {
            x: 47.2, y: 41043.0,
          }, {
            x: 96.5, y: 24835.0,
          }, {
            x: 91.2, y: 32295.0
          }, {
            x: 97.2, y: 27762.0
          }, {
            x: 41.9, y: 40276.0
          }, {
            x: 84.9, y:31916.0
          },
          { x: 66.1, y: 69631.0 }, 
          { x: 91.2, y: 86869.0 }, 
          { x: 91, y: 99932.0 }, 
          { x: 31.2, y: 82974.0 }, 
          { x: 38.8, y: 41043.0 },
          { x: 3.5, y: 24835.0},
          { x: 8.8, y: 32295.0 }, 
          { x: 2.7, y: 27762.0 }, 
          { x: 25.8, y: 40276.0 }, 
          { x: 5, y: 31916.0 },
          { x: 53.8, y: 69631.0 }, 
          { x: 36.1, y: 86869.0 }, 
          { x: 28.2, y: 99932.0 }, 
          { x: 35.5, y: 82974.0 }, 
          { x: 172.1, y: 41043.0 },
          {x: 241.3, y:24835.0},
          { x: 191.1, y: 32295.0 }, 
          { x: 177.71, y: 27762.0 }, 
          { x: 212.8, y: 40276.0 }, 
          { x:394.9, y: 31916.0 },
          { x: 20, y: 69631.0 }, 
          { x: 1.4, y: 86869.0 }, 
          { x: 8.9, y: 99932.0 }, 
          { x: 11, y: 82974.0 }, 
          { x: 13.8, y: 41043.0 },
          {x: 0, y:24835.0},
          { x:0, y: 32295.0 }, 
          { x:0, y: 27762.0 }, 
          { x: 32.2, y: 40276.0 }, 
          { x:10, y: 31916.0 },
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