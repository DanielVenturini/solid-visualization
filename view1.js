
// Set a callback to run when the Google Visualization API is loaded.
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() {

    var data = google.visualization.arrayToDataTable([
        ['Nome', 'Estrela', 'Forks', 'Grupo', 'Tamanho'],
               
    ]);

    var options = {
        title: 'Correlation between life expectancy, fertility rate ' + 'and population of some world countries (2010)',
        hAxis: { title: 'Star' },
        vAxis: { title: 'Forks' },
        bubble: { textStyle: { fontSize: 11 } }
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}




    
