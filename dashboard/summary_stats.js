// Assign initial metric to be displayed in the panel.
let firstMetric = 'danceability';

// Create a function to gather metric data
function summaryStats(tiktokData, metric) {
    
    // Create empty array to store metric data
    let metricData = [];

    // Set a total to add to for calulations.
    let total = 0

    // Loop through data to gather specific metric data.
    for (i = 0; i < tiktokData.length; i++) {

        let object = tiktokData[i];

        metricData.push(object[metric]);

        total += object[metric];
    }

    // Perform statistical calculations on metric data.
    let metricMin = Math.min(...metricData);
    let metricMax = Math.max(...metricData);
    let metricMean = total / metricData.length;
    let roundedMean = metricMean.toFixed(3)
    
    let deviations = metricData.map(num => Math.pow(num - metricMean, 2)); 
    let stdDeviation = Math.sqrt(deviations.reduce((acc,val) => acc + val, 0) / metricData.length);
    let rounded_std_Deviation = stdDeviation.toFixed(3)
    let sortedArr = metricData.slice().sort((a,b) => a - b)

    let metricQ1 = sortedArr[Math.floor(metricData.length * 0.25)];
    let metricQ2 = sortedArr[Math.floor(metricData.length * 0.50)];
    let metricQ3 = sortedArr[Math.floor(metricData.length * 0.75)];

    // Grab the summary panel with d3.
    let panel = d3.select("#summary_stat");

    // Clear any calculations that might have been there before.
    panel.html("");

    // Add new calculations to the stat panel.
    panel.append("p").text(`Min: ${metricMin}`);
    panel.append("p").text(`Max: ${metricMax}`);
    panel.append("p").text(`Mean: ${roundedMean}`);
    panel.append("p").text(`Std. Dev: ${rounded_std_Deviation}`);
    panel.append("p").text(`Q1: ${metricQ1}`);
    panel.append("p").text(`Q2: ${metricQ2}`);
    panel.append("p").text(`Q3: ${metricQ3}`);
};

// Run the function with given metric.
summaryStats(tiktokData, firstMetric);

// Create function to run on new selection to update panel and histogram.
function updateChartSummary() {

    // Assign variable to extract metric from selection to display in panel.
    let selection = document.getElementById('selDataset').value;
        
    // Recall the summary function.
    summaryStats(tiktokData, selection);

    // Recall the function to update the histogram.
    updateHist();
};