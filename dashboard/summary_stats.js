let firstMetric = 'danceability';

function summaryStats(tiktokData, metric) {
    
    let metricData = [];

    let total = 0

    for (i = 0; i < tiktokData.length; i++) {

        let object = tiktokData[i];

        metricData.push(object[metric]);

        total += object[metric];
    }

    let metricMin = Math.min(...metricData);
    let metricMax = Math.max(...metricData);
    let metricMean = total / metricData.length;
    
    let deviations = metricData.map(num => Math.pow(num - metricMean, 2)); 
    let stdDeviation = Math.sqrt(deviations.reduce((acc,val) => acc + val, 0) / metricData.length);

    let sortedArr = metricData.slice().sort((a,b) => a - b)

    let metricQ1 = sortedArr[Math.floor(metricData.length * 0.25)];
    let metricQ2 = sortedArr[Math.floor(metricData.length * 0.50)];
    let metricQ3 = sortedArr[Math.floor(metricData.length * 0.75)];

    let panel = d3.select("#summary_stat");

    panel.html("");
    panel.append("p").text(`Min: ${metricMin}`);
    panel.append("p").text(`Max: ${metricMax}`);
    panel.append("p").text(`Mean: ${metricMean}`);
    panel.append("p").text(`Std. Dev: ${stdDeviation}`);
    panel.append("p").text(`Q1: ${metricQ1}`);
    panel.append("p").text(`Q2: ${metricQ2}`);
    panel.append("p").text(`Q3: ${metricQ3}`);
};

summaryStats(tiktokData, firstMetric);


function updateSummary() {

    // Assign variable to extract metric from selection to display in panel.
    let selection = document.getElementById('selDataset').value;
        
    // Recall the summary function.
    summaryStats(tiktokData, selection);
};