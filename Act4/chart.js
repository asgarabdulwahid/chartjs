const ctx = document.getElementById('mobaChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [
    {
      label: 'DOTA2',
      data: [500000, 650000, 750000, 100000, 300000,],
      borderWidth: 1
    },
     {
        label: 'LOL',
        data: [700000, 850000, 980000, 200000, 400000,],
        borderWidth: 1
      }
      ,
     {
        label: 'ML',
        data: [30000, 65000, 100000, 700000, 500000,],
        borderWidth: 1
      }
]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});