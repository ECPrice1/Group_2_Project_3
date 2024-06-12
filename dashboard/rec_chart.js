// Initialize the chart with a certain metric already displayed
let initialMetric_rec_chart = 'danceability';

// Function to create chart.
function plotRec_Chart(tiktokData, metric) {
// Sort the data by given metric
let sorted_data = tiktokData.sort(function sortFunction(a, b) {
    return b[metric] - a[metric]
})

// Slice the top 50 objects and then delete any duplicates
let slicedData = sorted_data.slice(0, 50);
// This code snippet identifies unique song titles in the slicedData, and then pulls the metrics for just that set of unique song titles, removing duplicates that appear in the list
let uniquedata = Array.from(new Set(slicedData.map(a => a.title)))
    .map(title => {
        return slicedData.find(a => a.title === title);
    });
// Take the top 5 now of the unique dataset
let final_sliced_data = uniquedata.slice(0,5)

// Reverse the array to accommodate Plotly's defaults
final_sliced_data.reverse();


let trace1 = {
  x: final_sliced_data.map(object => object[metric]), 
  y: final_sliced_data.map(object => object.title + "<br> by " + object.artist +" " ), // song name and artist will display to the left
  text: final_sliced_data.map(object => object.tittle),
  type: "bar",
  orientation: "h" //horizontal bar chart
};

// Data array
let data = [trace1];

// Create the layout with a title, and forced pixel heights and widths
let layout = {
  title: `Recommendations <br> <sup> Top 5 ${metric} songs </sup>`,
  height: 600,
  width: 1400,
  margin: {
    l: 330,  // Adjust this value as needed to show all text on the left
  },
  autosize: true,
  paper_bgcolor: 'lightgray'
};

// Render the plot to the appropiate tag
Plotly.newPlot("rec_chart", data, layout);
};

// Call function with tiktokData and our initial metric.
plotRec_Chart(tiktokData, initialMetric_rec_chart);

// Create function to update the current chart to desired metric.
function updateRec_Chart() {

    // Assign variable to extract metric from selection to display in chart.
    let selection = document.getElementById('rec_chart_Dropdown').value;
    
    // Re-call the plot function.
    plotRec_Chart(tiktokData, selection);
};