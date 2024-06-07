let years = [2019, 2020, 2021, 2022];

// Metric variable for function inputs
let metric = "danceability";
// let metric = "rental_rate";
// let metric = "replacement_cost";

// Function to calculate and plot the average of a metric by rating
function plotMetric(tiktokData, years, metric) {
  // Initialize an array to hold metric averages
  let metricArray = [];

  // Loop through the array of ratings
  for (let i =0; i < years.length; i++) {
    // Store the year at index `i` for evaluation
    year = years[i];
    console.log(year)
    // Initialize variables to increment
    let count = 0;
    let total = 0;

    // Loop through the array of songs
    for (let j = 0; j < tiktokData.length; j++) {
      // Store the song at index `j` for evaluation
      row = tiktokData[j];
      console.log(row)

      // Compare `rating` value to `rating` provided as argument
      if (row.Year == year){
        console.log(metricArray)
        // Increment by `metric` argument value
        total += row[metric];
        // Increment by one
        count += 1;
      }
    }
    // Calculate the average value
    let meanValue = total / count;

    // Append the average value to the  `metricArray`
    metricArray.push(meanValue);
  }
  
  // Assign `ratings` array argument to `x`
  // Assign the `metricArray` with averages for each rating to `y`
  let trace1 = {
    x: years,
    y: metricArray,
    type: "scatter", 
    mode: "lines"
  }

  let data = [trace1];

  // Pass metric to chart title
  let layout = {
    title: `Average ${metric} by year`, 
    xaxis: {
        title: "Year"
    },
    yaxis: {
        title: `Average ${metric}`
    }
  };

  Plotly.newPlot("line_graph", data, layout);
}

// Invoke the plotting function
plotMetric(tiktokData, years, metric);
