var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 28, 24, 7],
      backgroundColor: "rgba(153,255,51,1)"
    }, {
      label: 'oranges',
      data: [30, 29, 5, 5, 20, 3, 10],
      backgroundColor: "rgba(255,153,0,1)"
    }]
  }
});


// apex
var options = {
    series: [{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27]
  }, {
    name: 'PRODUCT C',
    data: [11, 17, 15, 15, 21, 14]
  }, {
    name: 'PRODUCT D',
    data: [21, 7, 25, 13, 22, 8]
  }],
    chart: {
    type: 'line',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
      '01/05/2011 GMT', '01/06/2011 GMT'
    ],
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  };

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
