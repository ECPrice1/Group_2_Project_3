let initialMetric_rec_chart = 'danceability';

// Function to create chart.
function plotRec_Chart(tiktokData, metric) {
// Sort the data by Greek search results descending
console.log(metric)
let sorted_data = tiktokData.sort(function sortFunction(a, b) {
    return b[metric] - a[metric]
})

// Slice the first 50 objects and then delete any duplicates
let slicedData = sorted_data.slice(0, 50);
console.log(slicedData)
let uniquedata = Array.from(new Set(slicedData.map(a => a.title)))
    .map(title => {
        return slicedData.find(a => a.title === title);
    });
console.log(uniquedata)
let final_sliced_data = uniquedata.slice(0,5)

// Reverse the array to accommodate Plotly's defaults
final_sliced_data.reverse();
x_values = final_sliced_data.map(object => object[metric])
console.log(x_values)
minXValue = math.min(x_values)
maxXValue = math.max(x_values) 
console.log(minXValue)
console.log(maxXValue)
console.log( final_sliced_data.map(object => object.title + " by " + object.artist +" " ))
let trace1 = {
  x: x_values,
  y: final_sliced_data.map(object => object.title + " by " + object.artist +" " ),
  text: final_sliced_data.map(object => object.tittle),
  name: "Recommendations",
  type: "bar",
  orientation: "h"
};

// Data array
let data = [trace1];

// Apply a title to the layout
let layout = {
  title: "Recommendations",
  height: 600,
  width: 1400,
  margin: {
    l: 400,  // Adjust this value as needed to show all text on the left
  },
  autosize: true,
//   xaxis: {
//     range: [minXValue, maxXValue]  // Set the minimum and maximum x-axis values here 
//   },
  paper_bgcolor: 'lightgray'
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("rec_chart", data, layout);

};

// Call function with tiktokData and our initial metric.
plotRec_Chart(tiktokData, initialMetric_rec_chart);

// Create function to update the current histogram to desired metric.
function updateRec_Chart() {

    // Assign variable to extract metric from selection to display in histogram.
    let selection = document.getElementById('rec_chart_Dropdown').value;
    
    // Recall the plot function.
    plotRec_Chart(tiktokData, selection);
};