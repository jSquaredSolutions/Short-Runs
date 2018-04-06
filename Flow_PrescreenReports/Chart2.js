function runChartwebpart() {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "horizontalBar",
    responsive: true,
    data: {
      labels: [
        "I1",
        "I2",
        "I3",
        "I4",
        "I5",
        "I6",
        "E1",
        "E2",
        "E3",
        "E4",
        "E5",
        "E6",
        "E7",
        "E8",
        "E9",
        "E10",
        "E11",
        "E12",
        "E13",
        "E14",
        "E15",
        "E16",
        "E17",
        "E18",
        "E19",
      ],
      datasets: [
        {
          label: "Total",
          data: [
            parseInt(
              sortedArrayPrescreen.filter(function(x) {
                return x == "I1a";
              }).length +
                sortedArrayPrescreen.filter(function(x) {
                  return x == "I1b";
                }).length +
                sortedArrayPrescreen.filter(function(x) {
                  return x == "I1c";
                }).length
            ),
            sortedArrayPrescreen.filter(function(x) {
              return x == "I2";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "I3";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "I4";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "I5";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "I6";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E1";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E2";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E3";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E4";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E5";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E6";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E7";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E8";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E9";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E10";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E11";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E12";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E13";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E14";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E15";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E16";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E17";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E18";
            }).length,
            sortedArrayPrescreen.filter(function(x) {
              return x == "E19";
            }).length
          ],
          backgroundColor: "rgba(70,130,180,1)"
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          categoryPercentage: 0.5,
          barPercentage: 0.5
        }],
        xAxes: [{}]
      }
    }
  });
}
