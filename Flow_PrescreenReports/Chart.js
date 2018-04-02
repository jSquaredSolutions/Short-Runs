function runChartwebpart() {                                                                                              var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["I1","I2","I3","I4","I5","I6","E1", "E2", "E3", "E4", "E5", "E6","E7","E8","E9","E10","E11","E12","E13","E14","E15","E16","E17","E18","E19","E20"],
                datasets: [{
                    label: 'Total',
                    data: [parseInt(sortedArrayPrescreen.filter(function(x) {return x == "E20"})), 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(70,130,180,1)'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        maxBarThickness: 15,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                     xAxes: [{
                        maxBarThickness: 15
                    }]
                }
            }
        });
    };