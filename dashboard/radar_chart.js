let data_radar_1 = []
let data_radar_2 = []
let data_radar_3 = []
let data_radar_4 = []
let data_radar_5 = []
let month_index = 0
let filteredData = []
console.log(tiktokData.length)
for (let i = 0; i < 5; i++) {
    //Filter the dataset based on the target month
    filteredData = tiktokData.filter(item => {
    let date = new Date(item.date);
    return date.getMonth() === month_index || date.getMonth() === month_index + 1;
    })
    let Danceability_data = []
    let Energy_data = []
    let Tempo_data = []
    let Valence_data = []
    let Acousticness_data = []
    let Liveness_data = []
    let Speechiness_data = []
    //let artist_pop_data = []
    console.log(filteredData)
    filteredData.forEach((item) => {
      Danceability_data.push(item.danceability),
      Energy_data.push(item.energy)
      Tempo_data.push(item.tempo),
      Valence_data.push(item.valence),
      Acousticness_data.push(item.acousticness),
      Liveness_data.push(item.liveness),
      Speechiness_data.push(item.speechiness)
      //artist_pop_data.push(item.artist_pop)
  })
    Danceability_data = Danceability_data.map(entry => 100*entry)
    Energy_data = Energy_data.map(entry => 100*entry)
    Speechiness_data = Speechiness_data.map(entry => 100*entry)
    Acousticness_data = Acousticness_data.map(entry => 200*entry)
    Liveness_data = Liveness_data.map(entry => 100*entry)
    Valence_data = Valence_data.map(entry => 100*entry)
    Tempo_data = Tempo_data.map(entry => entry/2)
    console.log(Danceability_data)
    console.log(Energy_data)
    console.log(Speechiness_data)
    console.log(Acousticness_data)
    console.log(Liveness_data)
    console.log(Valence_data)
    console.log(Tempo_data)

    if (i==0) {
      data_radar_1 = [math.mean(Danceability_data), math.mean(Energy_data), math.mean(Tempo_data), math.mean(Valence_data),
        math.mean(Acousticness_data) 
        //math.mean(Liveness_data_2019),math.mean(Speechiness_data_2019),
        //math.mean(artist_pop_data)
    ]
  }
    else if (i==1) {
    data_radar_2 = [math.mean(Danceability_data), math.mean(Energy_data), math.mean(Tempo_data), math.mean(Valence_data),
      math.mean(Acousticness_data)
      // math.mean(Liveness_data_2019),math.mean(Speechiness_data_2019),
      //math.mean(artist_pop_data)
    ]
  }
  else if (i==2) {
  data_radar_3 = [math.mean(Danceability_data), math.mean(Energy_data), math.mean(Tempo_data), math.mean(Valence_data),
    math.mean(Acousticness_data) 
    //math.mean(Liveness_data_2019),math.mean(Speechiness_data_2019),
   // math.mean(artist_pop_data)
  ]
  }
  else if (i==3) {
  data_radar_4 = [math.mean(Danceability_data), math.mean(Energy_data), math.mean(Tempo_data), math.mean(Valence_data),
    math.mean(Acousticness_data) 
    // math.mean(Liveness_data_2019),math.mean(Speechiness_data_2019),
    //math.mean(artist_pop_data)
  ]
  }
  else if (i==4) {
  data_radar_5 = [math.mean(Danceability_data), math.mean(Energy_data), math.mean(Tempo_data), math.mean(Valence_data),
    math.mean(Acousticness_data)
    // math.mean(Liveness_data_2019),math.mean(Speechiness_data_2019),
    //math.mean(artist_pop_data)
  ]
  }
    
    month_index = month_index + 2
    console.log(month_index)
    if (month_index === 6) {
      month_index += 2
    }
  }

//Create the list of data points to go into the radar chart

const data_info = {
    labels: [
      'Danceability',
      'Energy',
      'Tempo',
      'Valence',
      'Acousticnesss'
      //'Acousticnesss','Liveness','Speechiness',
      //'Artist Popularity'
    ],
    datasets: [{
        label: 'Sept-Oct 2023',
        data: data_radar_4,
        fill: true,
        backgroundColor: 'rgba(10, 250, 250, 0.2)',
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
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Mar-Apr 2024',
      data: data_radar_2,
      fill: true,
      backgroundColor: 'rgba(250, 5, 250, 0.2)',
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
        backgroundColor: 'rgba(10, 250, 50, 0.2)',
        borderColor: 'rgb(10, 250, 50)',
        pointBackgroundColor: 'rgb(10, 250, 50)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(10, 250, 50)'
      }]
  };

// Find the right container for the chart and display it
  const ctx = document.getElementById('radar_chart');
  new Chart(ctx,  {
    type: 'radar',
    data: data_info,
    options: {
        scales: {
            r: {
                min: 40,
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

  