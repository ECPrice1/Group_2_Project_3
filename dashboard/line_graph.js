let years = [2019, 2020, 2021, 2022];

// Metric variable for function inputs
let metric = "danceability";


// Function to calculate and plot the average and standard deviation of a metric by year
function plotMetric(tiktokData, years, metric) {
    // Initialize arrays to hold metric averages and standard deviations
    let metricArray = [];
    let stdDevArray = [];
  
    // Loop through the array of years
    for (let i = 0; i < years.length; i++) {
      let year = years[i];
      let values = [];
  
      // Loop through the data to collect metric values for the current year
      for (let j = 0; j < tiktokData.length; j++) {
        let row = tiktokData[j];
  
        if (row.Year == year) {
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
  
    // Create traces for mean and standard deviation
    let meanTrace = {
      x: years,
      y: metricArray,
      type: "scatter",
      mode: "lines+markers",
      name: 'Mean',
      yaxis: 'y'
    };
  
    let stdDevTrace = {
      x: years,
      y: stdDevArray,
      type: "scatter",
      mode: "lines+markers",
      name: 'Standard Deviation',
      yaxis: 'y2'
    };
  
    let data = [meanTrace, stdDevTrace];
  
    // Layout settings
    let layout = {
      title: `Average and Standard Deviation of ${metric} by year`,
      xaxis: {
        title: "Year",
        tickmode: 'array',
        tickvals: years,
        ticktext: years.map(String),
        tickfont: {
          size: 14,
          color: 'blue'
        }
      },
      yaxis: {
        title: `Average ${metric}`,
        titlefont: {
          size: 16,
          color: 'green'
        },
        tickfont: {
          size: 12,
          color: 'red'
        },
        range: [0, Math.max(...metricArray) + Math.max(...stdDevArray) * 0.5] // Adjust y-axis range for mean
      },
      yaxis2: {
        title: `Standard Deviation`,
        titlefont: {
          size: 16,
          color: 'blue'
        },
        tickfont: {
          size: 12,
          color: 'blue'
        },
        overlaying: 'y',
        side: 'right',
        range: [0, Math.max(...stdDevArray) + Math.max(...stdDevArray) * 0.5] // Adjust y-axis range for standard deviation
      },
      plot_bgcolor: 'lightgray',
      paper_bgcolor: 'lightblue'
    };
  
    // Plot the graph
    Plotly.newPlot("line_graph", data, layout);
  }
  
  // Invoke the plotting function
  plotMetric(tiktokData, years, metric);

function updatePlot() {
    // Get the selected metric from the dropdown
    let selectedMetric = document.getElementById("metricDropdown").value;
  
    // Replot the graph with the selected metric
    plotMetric(tiktokData, years, selectedMetric);
  }
  
  // Call the updatePlot function when the page loads to initially plot the default metric
  document.addEventListener("DOMContentLoaded", function() {
    updatePlot();
  });
