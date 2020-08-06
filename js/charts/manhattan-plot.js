// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterChart");
var neighborhoods = ["SoHo", "Tribeca", "Flatiron District", "Midtown Manhattan", "West Village", "Lower East Side", "East Harlem", "Hamilton Heights", "Washington Heights", "Chinatown","SoHo", "Tribeca", "Flatiron District", "Midtown Manhattan", "West Village", "Lower East Side", "East Harlem", "Hamilton Heights", "Washington Heights", "Chinatown","SoHo", "Tribeca", "Flatiron District", "Midtown Manhattan", "West Village", "Lower East Side", "East Harlem", "Hamilton Heights", "Washington Heights", "Chinatown","SoHo", "Tribeca", "Flatiron District", "Midtown Manhattan", "West Village", "Lower East Side", "East Harlem", "Hamilton Heights", "Washington Heights", "Chinatown"];
var colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
       labels: neighborhoods,
       datasets: [{
          pointBackgroundColor: colors,
          data: [{
            x: 1, y: 148175.0,
          }, {
            x: 2.1, y: 210069.0,
          }, {
            x: 3.1, y: 167170.0,
          }, {
            x: 2, y: 144910.0,
          }, {
            x: 2, y: 144910.0,
          }, {
            x: 11.5, y: 45500.0,
          }, {
            x: 33, y: 41825.0
          }, {
            x: 99, y: 22757.0
          }, {
            x: 10, y: 54514.0
          }, {
            x: 4, y:65432.0
          },
          { x: 79, y: 148175.0 }, 
          { x: 82, y: 210069.0 }, 
          { x: 69, y: 167170.0 }, 
          { x: 72, y: 144910.0 }, 
          { x: 85.4, y: 136910.0 },
          { x: 2.7, y: 45500.0 }, 
          { x: 13, y: 41825.0 }, 
          { x: 2, y: 22757.0 }, 
          { x: 17.2, y: 54514.0 },
          { x: 21.4, y:65432.0 },
          { x: 7.2, y: 148175.0 }, 
          { x: 5.3, y: 210069.0 }, 
          { x: 7.3, y: 167170.0 }, 
          { x: 6.2, y: 144910.0 }, 
          { x: 12.4, y: 136910.0 },
          { x: 47.4, y: 45500.0 }, 
          { x: 45.5, y: 41825.0 }, 
          { x: 0, y: 22757.0 }, 
          { x: 70, y: 54514.0 },
          { x: 5, y:65432.0 },
          { x: 12.4, y: 148175.0 }, 
          { x: 10.5, y: 210069.0 }, 
          { x: 19.8, y: 167170.0 }, 
          { x: 19.6, y: 144910.0 }, 
          { x: 7.3, y: 136910.0 },
          { x: 38.4, y: 45500.0 }, 
          { x: 8, y: 41825.0 }, 
          { x: 0, y: 22757.0 }, 
          { x: 3, y: 54514.0 },
          { x: 69.4, y:65432.0 }
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