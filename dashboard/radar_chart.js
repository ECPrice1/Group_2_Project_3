//Filter the data by the different years
let data2019 = tiktokData.filter(item => item.Year === 2019)
let data2020 = tiktokData.filter(item => item.Year === 2020)
let data2021 = tiktokData.filter(item => item.Year === 2021)
let data2022 = tiktokData.filter(item => item.Year === 2022)

//Initialize arrays to hold data
let list_2019 = []
let list_2020 = []
let list_2021 = []
let list_2022 = []

let Danceability_data_2019 = []
let Energy_data_2019 = []
let Tempo_data_2019 = []
let Valence_data_2019 = []
let Acousticness_data_2019 = []
let Liveness_data_2019 = []
let Speechiness_data_2019 = []
let artist_pop_data_2019 = []

let Danceability_data_2020 = []
let Energy_data_2020 = []
let Tempo_data_2020 = []
let Valence_data_2020 = []
let Acousticness_data_2020 = []
let Liveness_data_2020 = []
let Speechiness_data_2020 = []
let artist_pop_data_2020 = []

let Danceability_data_2021 = []
let Energy_data_2021 = []
let Tempo_data_2021 = []
let Valence_data_2021 = []
let Acousticness_data_2021 = []
let Liveness_data_2021 = []
let Speechiness_data_2021 = []
let artist_pop_data_2021 = []

let Danceability_data_2022 = []
let Energy_data_2022 = []
let Tempo_data_2022 = []
let Valence_data_2022 = []
let Acousticness_data_2022 = []
let Liveness_data_2022 = []
let Speechiness_data_2022 = []
let artist_pop_data_2022 = []

//Populate arrays for each year
data2019.forEach((item) => {
    Danceability_data_2019.push(item.danceability),
    Energy_data_2019.push(item.energy)
    Tempo_data_2019.push(item.tempo),
    Valence_data_2019.push(item.valence),
    Acousticness_data_2019.push(item.acousticness),
    Liveness_data_2019.push(item.liveness),
    Speechiness_data_2019.push(item.speechiness),
    artist_pop_data_2019.push(item.artist_pop)
})
data2020.forEach((item) => {
    Danceability_data_2020.push(item.danceability),
    Energy_data_2020.push(item.energy)
    Tempo_data_2020.push(item.tempo),
    Valence_data_2020.push(item.valence),
    Acousticness_data_2020.push(item.acousticness),
    Liveness_data_2020.push(item.liveness),
    Speechiness_data_2020.push(item.speechiness),
    artist_pop_data_2020.push(item.artist_pop)
})
data2021.forEach((item) => {
    Danceability_data_2021.push(item.danceability),
    Energy_data_2021.push(item.energy)
    Tempo_data_2021.push(item.tempo),
    Valence_data_2021.push(item.valence),
    Acousticness_data_2021.push(item.acousticness),
    Liveness_data_2021.push(item.liveness),
    Speechiness_data_2021.push(item.speechiness),
    artist_pop_data_2021.push(item.artist_pop)
})
data2022.forEach((item) => {
    Danceability_data_2022.push(item.danceability),
    Energy_data_2022.push(item.energy)
    Tempo_data_2022.push(item.tempo),
    Valence_data_2022.push(item.valence),
    Acousticness_data_2022.push(item.acousticness),
    Liveness_data_2022.push(item.liveness),
    Speechiness_data_2022.push(item.speechiness),
    artist_pop_data_2022.push(item.artist_pop)
})

//Normalize Data on 0 - 100 scale
Danceability_data_2019 = Danceability_data_2019.map(entry => 100*entry)
Danceability_data_2020 = Danceability_data_2020.map(entry => 100*entry)
Danceability_data_2021 = Danceability_data_2021.map(entry => 100*entry)
Danceability_data_2022 = Danceability_data_2022.map(entry => 100*entry)

Energy_data_2019 = Energy_data_2019.map(entry => 100*entry)
Energy_data_2020 = Energy_data_2020.map(entry => 100*entry)
Energy_data_2021 = Energy_data_2021.map(entry => 100*entry)
Energy_data_2022 = Energy_data_2022.map(entry => 100*entry)

Speechiness_data_2019 = Speechiness_data_2019.map(entry => 100*entry)
Speechiness_data_2020 = Speechiness_data_2020.map(entry => 100*entry)
Speechiness_data_2021 = Speechiness_data_2021.map(entry => 100*entry)
Speechiness_data_2022 = Speechiness_data_2022.map(entry => 100*entry)

Acousticness_data_2019 = Acousticness_data_2019.map(entry => 100*entry)
Acousticness_data_2020 = Acousticness_data_2020.map(entry => 100*entry)
Acousticness_data_2021 = Acousticness_data_2021.map(entry => 100*entry)
Acousticness_data_2022 = Acousticness_data_2022.map(entry => 100*entry)

Liveness_data_2019 = Liveness_data_2019.map(entry => 100*entry)
Liveness_data_2020 = Liveness_data_2020.map(entry => 100*entry)
Liveness_data_2021 = Liveness_data_2021.map(entry => 100*entry)
Liveness_data_2022 = Liveness_data_2022.map(entry => 100*entry)

Valence_data_2019 = Valence_data_2019.map(entry => 100*entry)
Valence_data_2020 = Valence_data_2020.map(entry => 100*entry)
Valence_data_2021 = Valence_data_2021.map(entry => 100*entry)
Valence_data_2022 = Valence_data_2022.map(entry => 100*entry)

Tempo_data_2019 = Tempo_data_2019.map(entry => entry/2)
Tempo_data_2020 = Tempo_data_2020.map(entry => entry/2)
Tempo_data_2021 = Tempo_data_2021.map(entry => entry/2)
Tempo_data_2022 = Tempo_data_2022.map(entry => entry/2)
//Create the list of data points to go into the radar chart

list_2019 = [math.mean(Danceability_data_2019), math.mean(Energy_data_2019), math.mean(Tempo_data_2019), math.mean(Valence_data_2019),
    //math.mean(Acousticness_data_2019), math.mean(Liveness_data_2019),math.mean(Speechiness_data_2019),
    math.mean(artist_pop_data_2019)
]

list_2020 = [math.mean(Danceability_data_2020), math.mean(Energy_data_2020), math.mean(Tempo_data_2020), math.mean(Valence_data_2020),
    //math.mean(Acousticness_data_2020), math.mean(Liveness_data_2020),math.mean(Speechiness_data_2020),
    math.mean(artist_pop_data_2020)
]

list_2021 = [math.mean(Danceability_data_2021), math.mean(Energy_data_2021), math.mean(Tempo_data_2021), math.mean(Valence_data_2021),
   // math.mean(Acousticness_data_2021), math.mean(Liveness_data_2021),math.mean(Speechiness_data_2021),
    math.mean(artist_pop_data_2021)
]

list_2022 = [math.mean(Danceability_data_2022), math.mean(Energy_data_2022), math.mean(Tempo_data_2022), math.mean(Valence_data_2022),
    //math.mean(Acousticness_data_2022), math.mean(Liveness_data_2022),math.mean(Speechiness_data_2022),
    math.mean(artist_pop_data_2022)
]

const data_info = {
    labels: [
      'Danceability',
      'Energy',
      'Tempo',
      'Valence',
      //'Acousticnesss','Liveness','Speechiness',
      'Artist Popularity'
    ],
    datasets: [{
      label: '2019',
      data: list_2019,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: '2020',
      data: list_2020,
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    },
    {
        label: '2021',
        data: list_2021,
        fill: true,
        backgroundColor: 'rgba(10, 250, 50, 0.2)',
        borderColor: 'rgb(10, 250, 50)',
        pointBackgroundColor: 'rgb(10, 250, 50)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(10, 250, 50)'
      },
      {
        label: '2022',
        data: list_2022,
        fill: true,
        backgroundColor: 'rgba(10, 250, 250, 0.2)',
        borderColor: 'rgb(10, 250, 250)',
        pointBackgroundColor: 'rgb(10, 250, 250)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(10, 250, 250)'
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
                min: 50,
                max: 75
            }
        },
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  });

  