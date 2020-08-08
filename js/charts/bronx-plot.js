// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterChart2");
var neighborhoods = ["Moris Park", "Spencer Estates-country club", "City Island", "Pelham Gardens", "Van Nest", "Mott Haven", "Highbridge", "Hunts Point", "Norwood", "University Heights","Moris Park", "Spencer Estates-country club", "City Island", "Pelham Gardens", "Van Nest", "Mott Haven", "Highbridge", "Hunts Point", "Norwood", "University Heights", "Moris Park", "Spencer Estates-country club", "City Island", "Pelham Gardens", "Van Nest", "Mott Haven", "Highbridge", "Hunts Point", "Norwood", "University Heights", "Moris Park", "Spencer Estates-country club", "City Island", "Pelham Gardens", "Van Nest", "Mott Haven", "Highbridge", "Hunts Point", "Norwood", "University Heights"];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red','green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green','yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: neighborhoods,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
            x: 9, y: 69631.0,
          }, {
            x: 1.0, y: 86869.0,
          }, {
            x: 0, y: 99932.0,
          }, {
            x: 26, y: 82974.0,
          }, {
            x: 17.2, y: 41043.0,
          }, {
            x: 28.5, y: 24835.0,
          }, {
            x: 31.2, y: 32295.0
          }, {
            x: 35.2, y: 27762.0
          }, {
            x: 13.4, y: 40276.0
          }, {
            x: 17.2, y:31916.0
          },
          { x: 42.1, y: 69631.0 }, 
          { x: 71.4, y: 86869.0 }, 
          { x: 71, y: 99932.0 }, 
          { x: 29.2, y: 82974.0 }, 
          { x: 14.3, y: 41043.0 },
          { x: 1, y: 24835.0},
          { x: 3, y: 32295.0 }, 
          { x: 1, y: 27762.0 }, 
          { x: 8, y: 40276.0 }, 
          { x: 1, y: 31916.0 },
          { x: 35, y: 69631.0 }, 
          { x: 26.4, y: 86869.0 }, 
          { x: 22, y: 99932.0 }, 
          { x: 33, y: 82974.0 }, 
          { x: 63.3, y: 41043.0 },
          {x: 71, y:24835.0},
          { x:66, y: 32295.0 }, 
          { x:64, y: 27762.0 }, 
          { x: 68, y: 40276.0 }, 
          { x:80, y: 31916.0 },
          { x: 13, y: 69631.0 }, 
          { x: 1, y: 86869.0 }, 
          { x: 7, y: 99932.0 }, 
          { x: 11, y: 82974.0 }, 
          { x: 5.1, y: 41043.0 },
          {x: 0, y:24835.0},
          { x:0, y: 32295.0 }, 
          { x:0, y: 27762.0 }, 
          { x: 10.3, y: 40276.0 }, 
          { x:2, y: 31916.0 }
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