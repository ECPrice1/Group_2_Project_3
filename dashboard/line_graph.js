// Create a list of weeks
let weeks = [
"2024-06-08", 
"2024-06-01", 
"2024-05-25", 
"2024-05-18",
"2024-05-11",
"2024-05-04",
"2024-04-27",
"2024-04-20",
"2024-04-13",
"2024-04-06",
"2024-03-30",
"2024-03-23",
"2024-03-16",
"2024-03-09",
"2024-03-02",
"2024-02-24",
"2024-02-17",
"2024-02-10",
"2024-02-03",
"2024-01-27",
"2024-01-20",
"2024-01-13",
"2024-01-06",
"2023-12-30",
"2023-12-23",
"2023-12-16",
"2023-12-09",
"2023-12-02",
"2023-11-25",
"2023-11-18",
"2023-11-11",
"2023-11-04",
"2023-10-28",
"2023-10-21",
"2023-10-14",
"2023-10-07",
"2023-09-30",
"2023-09-23",
"2023-09-16"];

// Metric variable for function inputs
let metric = "danceability";

// linear regression function to plot "trendline"
function linearRegression(x, y) {
  let n = x.length;
  let sumX = x.reduce((a, b) => a + b, 0);
  let sumY = y.reduce((a, b) => a + b, 0);
  let sumXY = x.map((val, i) => val * y[i]).reduce((a, b) => a + b, 0);
  let sumXSquare = x.map(val => val * val).reduce((a, b) => a + b, 0);
  let slope = (n * sumXY - sumX * sumY) / (n * sumXSquare - sumX * sumX);
  let intercept = (sumY - slope * sumX) / n;
  return { slope, intercept };
}

// Function to calculate and plot the average of a metric by week
function plotMetric(tiktokData, weeks, metric) {
  // Initialize array to hold metric averages
  let metricArray = [];

  // Loop through the array of weeks
  for (let i = 0; i < weeks.length; i++) {
      let week = weeks[i];
      let values = [];

      // Loop through the data to collect metric values for the current week
      for (let j = 0; j < tiktokData.length; j++) {
          let row = tiktokData[j];

          if (row.date == week) {
              values.push(row[metric]);
          }
      }
 
      // Calculate mean for the current week
      let meanValue = values.reduce((a, b) => a + b, 0) / values.length;

            // Append the mean to the array
            metricArray.push(meanValue);
      
 
  }
     // Calculate the trendline for the mean values
     let trendline = linearRegression(weeks.map((_, index) => index + 1), metricArray);
     let trendlineValues = weeks.map((_, index) => trendline.slope * (index + 1) + trendline.intercept);

  // Calculate the minimum and maximum values of the metric data
  let minMetricValue = Math.min(...metricArray);
  let maxMetricValue = Math.max(...metricArray);

  // Set the y-axis range with a buffer for better visualization
  let yRange = [minMetricValue - 0.1 * (maxMetricValue - minMetricValue), maxMetricValue + 0.1 * (maxMetricValue - minMetricValue)];

  // Create traces for mean and standard deviation
  let meanTrace = {
      x: weeks,
      y: metricArray,
      type: "scatter",
      mode: "lines+markers",
      name: 'Mean',
      yaxis: 'y',
      line: {
        color: 'rgb(54, 162, 235)' // Set the line color for the mean trace (shade of blue)
    }
  };

  // Add the trendline to the meanTrace object
let trendlineTrace = {
  x: weeks,
  y: trendlineValues,
  type: "scatter",
  mode: "lines",
  name: 'Trendline',
  yaxis: 'y',
  line: {
      color: 'red' // Set the line color for the trendline
  }
};

  let data = [meanTrace] ;

  // Add the trendline trace to the data array
data.push(trendlineTrace);

  // Layout settings with updated y-axis range
  let layout = {
    title: `Average of ${metric} by week`,
    xaxis: {
        title: "Week",
        tickmode: 'array',
        tickvals: weeks.filter((week, index) => index % 5 === 0), // Select every 5th week
        ticktext: weeks.filter((week, index) => index % 5 === 0).map(String), // Map the selected weeks to strings
        tickfont: {
            size: 14,
            color: 'black'
        }
    },
    yaxis: {
        title: `Average ${metric}`,
        range: yRange
    },
    plot_bgcolor: 'white',
    paper_bgcolor: 'lightgray'
};
 

  // Plot the graph
  Plotly.newPlot("line_graph", data, layout);
}
  
  // Invoke the plotting function
  plotMetric(tiktokData, weeks, metric);

function updatePlot() {
    // Get the selected metric from the dropdown
    let selectedMetric = document.getElementById("metricDropdown").value;
  
    // Replot the graph with the selected metric
    plotMetric(tiktokData, weeks, selectedMetric);
  }
  
  // Call the updatePlot function when the page loads to initially plot the default metric
  document.addEventListener("DOMContentLoaded", function() {
    updatePlot();
  });
