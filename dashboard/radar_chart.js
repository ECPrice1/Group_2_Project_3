//Initialize arrays for holding data
let data_radar_1 = []
let data_radar_2 = []
let data_radar_3 = []
let data_radar_4 = []
let data_radar_5 = []
//Create a index for looping through months 
let month_index = 0
let filteredData = []

// Create a for loop to populate the data holding arrays. The data is broken into five sets, holding roughly 2 months of data each
for (let i = 0; i < 5; i++) {
    //Filter the dataset based on the target month
    filteredData = tiktokData.filter(item => {
    let date = new Date(item.date);
    return date.getMonth() === month_index || date.getMonth() === month_index + 1;
    })
    //Initialize temporay arrays to hold data
    let Danceability_data = []
    let Energy_data = []
    let Tempo_data = []
    let Valence_data = []
    let Acousticness_data = []
    let Liveness_data = []
    let Speechiness_data = []
    // Pushing information into the temporary arrays
    filteredData.forEach((item) => {
      Danceability_data.push(item.danceability),
      Energy_data.push(item.energy)
      Tempo_data.push(item.tempo),
      Valence_data.push(item.valence),
      Acousticness_data.push(item.acousticness),
      Liveness_data.push(item.liveness),
      Speechiness_data.push(item.speechiness)
  })
  //  Normalize the data on 0 - 100 scale for better visualization comprehension
    Danceability_data = Danceability_data.map(entry => 100*entry)
    Energy_data = Energy_data.map(entry => 100*entry)
    Speechiness_data = Speechiness_data.map(entry => 100*entry)
    Acousticness_data = Acousticness_data.map(entry => 200*entry) // Note, this number is doubled so it fits the scale of the other metrics better, mean acousitcness values are typically smaller than represented
    Liveness_data = Liveness_data.map(entry => 100*entry)
    Valence_data = Valence_data.map(entry => 100*entry)
    Tempo_data = Tempo_data.map(entry => entry/2)
  // Use the for loop to decide which list of data is appropiate. The chart is set up such that each list of data corresponds a set of two months
    if (i==0) {
      data_radar_1 = [math.mean(Danceability_data), math.mean(Energy_data), math.mean(Tempo_data), math.mean(Valence_data), math.mean(Acousticness_data) 
    ]
  }
    else if (i==1) {
    data_radar_2 = [math.mean(Danceability_data), math.mean(Energy_data), math.mean(Tempo_data), math.mean(Valence_data), math.mean(Acousticness_data)
    ]
  }
  else if (i==2) {
  data_radar_3 = [math.mean(Danceability_data), math.mean(Energy_data), math.mean(Tempo_data), math.mean(Valence_data), math.mean(Acousticness_data) 
  ]
  }
  else if (i==3) {
  data_radar_4 = [math.mean(Danceability_data), math.mean(Energy_data), math.mean(Tempo_data), math.mean(Valence_data), math.mean(Acousticness_data) 
  ]
  }
  else if (i==4) {
  data_radar_5 = [math.mean(Danceability_data), math.mean(Energy_data), math.mean(Tempo_data), math.mean(Valence_data), math.mean(Acousticness_data)
  ]
  }
    // Groups of two months
    month_index = month_index + 2
    // Currently the dataset does not have information from july and august so we skip those months
    if (month_index === 6) {
      month_index += 2
    }
  }

//Create the list of data points to go into the radar chart
let data_info = {
    labels: [
      'Danceability',
      'Energy',
      'Tempo',
      'Valence',
      'Acousticnesss'
    ], // These five make for the best and most comprhensible visualization, with acousticness being doubled to help fit the scale. 
    datasets: [{
        label: 'Sept-Oct 2023',
        data: data_radar_4,
        fill: true,
        backgroundColor: 'rgba(10, 250, 250, 0.2)', // light blue, teal
        borderColor: 'rgb(10, 250, 250)',
        pointBackgroundColor: 'rgb(10, 250, 250)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(10, 250, 250)'
      },
      {
        label: 'Nov-Dec 2023',
        data: data_radar_5,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // blue
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      },
      {
      label: 'Jan-Feb 2024',
      data: data_radar_1,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // red
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Mar-Apr 2024',
      data: data_radar_2,
      fill: true,
      backgroundColor: 'rgba(250, 5, 250, 0.2)', // pink, magenta
      borderColor: 'rgb(250, 5, 250)',
      pointBackgroundColor: 'rgb(250, 5, 250)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(250, 5, 250)'
    },
    {
        label: 'May-June 2024',
        data: data_radar_3,
        fill: true,
        backgroundColor: 'rgba(10, 250, 50, 0.2)', // light green
        borderColor: 'rgb(10, 250, 50)',
        pointBackgroundColor: 'rgb(10, 250, 50)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(10, 250, 50)'
      }]
  };

// Find the right container for the chart and display it
  let ctx = document.getElementById('radar_chart');
  new Chart(ctx,  {
    type: 'radar',
    data: data_info,
    options: {
        scales: {
            r: {
                min: 40, //Forcing the scale of the chart to be smaller, this allows for the user to see the small changes in the data easier
                max: 70
            }
        },
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  });

  