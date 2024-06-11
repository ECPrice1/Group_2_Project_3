// Assign danceability as the initial metric to visualize.
let initialMetric = 'danceability';

// Function to create histogram.
function plotHistogram(tiktokData, metric) {

    // Create array to hold metric data.
    let metricData = [];

    // Loop through tik tok data and add each point to the array.
    for (let i =0; i < tiktokData.length; i++) {

        let object = tiktokData[i];

        metricData.push(object[metric])
    };

    // Create trace to plot histogram for the given metric.
    let trace = {
        x: metricData,
        type: 'histogram',
        hovertext:'count',
        marker: {
            color: 'rgba(100, 200, 102, 0.7)'
        }
    };

    // Format the chart to desired specifications.
    let layout = {
        title: `${metric.charAt(0).toUpperCase() + metric.slice(1)} Histogram Chart`,
        colorway: '#2ca02c',
        xaxis: {title: 'Scale'},
        yaxis: {title: 'Frequency'},
        plot_bgcolor: 'white',
        paper_bgcolor: 'lightgray',
    }

    // Store trace and layout in a variable to use in the plot. 
    let data = [trace];

    // Utilize plotly to create the histogram.
    Plotly.newPlot('histogram', data, layout)
};

// Call function with tiktokData and our initial metric.
plotHistogram(tiktokData, initialMetric);

// Create function to update the current histogram to desired metric.
function updateHist() {

    // Assign variable to extract metric from selection to display in histogram.
    let selection = document.getElementById('histogramDropdown').value;
    
    // Recall the plot function.
    plotHistogram(tiktokData, selection);
};