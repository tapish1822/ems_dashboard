google.charts.load('current', {'packages':['corechart', 'gauge']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawLineChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Energy', 80],
    ]);

    var options = {
        width: 240, height: 220,
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

    chart.draw(data, options);

    setInterval(function() {
        data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
        chart.draw(data, options);
    }, 13000);
}

function drawLineChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('datetime', 'Time');
  data.addColumn('number', 'Energy1');
  data.addColumn('number', 'Energy2');

  // Example data, replace with your actual data
  data.addRows([
      [new Date(2023, 9, 12, 10, 15, 30), 100, 150],
      [new Date(2023, 9, 12, 10, 30, 45), 120, 130],
      [new Date(2023, 9, 12, 10, 45, 0), 90, 110],
      [new Date(2023, 9, 12, 11, 0, 15), 130, 140]
  ]);

  var options = {
      
      title: 'ENERGY TRENDS',
      titleTextStyle: {
        
        fontSize: 15,  // Increase the font size
        color: 'green' // Change the text color
    },  

    titlePosition: 'center',
      
      width: 940,
      height: 270,
      legend: { position: 'right' },
      hAxis: {
          format: 'HH:mm:ss',
      },
      vAxis: {
          title: 'Energy',
      },
  };

  var chart = new google.visualization.LineChart(document.getElementById('linechart_material'));
  chart.draw(data, options);
}