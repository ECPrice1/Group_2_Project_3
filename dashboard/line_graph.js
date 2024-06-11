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


// Function to calculate and plot the average and standard deviation of a metric by week
function plotMetric(tiktokData, weeks, metric) {
  // Initialize arrays to hold metric averages and standard deviations
  let metricArray = [];
  let stdDevArray = [];

  // Loop through the array of years
  for (let i = 0; i < weeks.length; i++) {
      let week = weeks[i];
      let values = [];

      // Loop through the data to collect metric values for the current year
      for (let j = 0; j < tiktokData.length; j++) {
          let row = tiktokData[j];

          if (row.date == week) {
              values.push(row[metric]);
          }
      }
 
      // Calculate mean and standard deviation for the current year
      let meanValue = values.reduce((a, b) => a + b, 0) / values.length;
      let stdDevValue = Math.sqrt(values.reduce((a, b) => a + Math.pow(b - meanValue, 2), 0) / values.length);

      // Append the mean and standard deviation to the arrays
      metricArray.push(meanValue);
      stdDevArray.push(stdDevValue);
  }

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

  let stdDevTrace = {
      x: weeks,
      y: stdDevArray,
      type: "scatter",
      mode: "lines+markers",
      name: 'Standard Deviation',
      yaxis: 'y2',
      line: {
        color: 'lightgreen' // Set the line color for the standard deviation trace
    }
  };

  let data = [meanTrace, stdDevTrace];

  // Layout settings with updated y-axis range
  let layout = {
    title: `Average and Standard Deviation of ${metric} by year`,
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
    yaxis2: {
        title: `Standard Deviation`,
        overlaying: 'y',
        side: 'right'
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
