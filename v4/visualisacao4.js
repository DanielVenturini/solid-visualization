var myChart = echarts.init(document.getElementById('view'));

fetch(`https://raw.githubusercontent.com/DanielVenturini/solid-visualization/master/Data/v4-4.json`)
    .then(response => response.json())
    .then(function(data){
    var sizeValue = '58%'
    var symbolSize = 3.5
    option = {
        legend: {},
        tooltip: {},
        
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {}
            }
        },
        grid: [
            { right: sizeValue, bottom: sizeValue },
            { left: sizeValue, bottom: sizeValue },
            { right: sizeValue, top: sizeValue },
            { left: sizeValue, top: sizeValue },
        ],
        yAxis: [
            { type: 'log', gridIndex: 0, name: 'Contribuidores' },
            { type: 'log', gridIndex: 1, name: 'Contribuidores' },
            { type: 'log', gridIndex: 2, name: 'Forks' },
            { type: 'log', gridIndex: 3, name: 'Contribuidores' },           
        ],
        xAxis: [
            { type: 'log', gridIndex: 0, name: 'Star', axisLabel: { rotate: 50, interval: 0 } },
            { type: 'category', gridIndex: 1, name: 'Linguagem', boundaryGap: true, axisLabel: { rotate: 50, interval: 0 }, data: ['JavaScript', 'Java', 'Python', 'Go', 'HTML', 'C++', 'Ruby', 'C', 'Objective-C', 'PHP', 'CSS', 'Shell', 'Swift', 'TypeScript', 'Jupyter Notebook', 'C#', 'Vim script', 'Kotlin', 'Vue', 'Scala'  ]},
            { type: 'log', gridIndex: 2, name: 'Star', axisLabel: { rotate: 50, interval: 0 } },
            { type: 'log', gridIndex: 3, name: 'Pulls', axisLabel: { rotate: 50, interval: 0 } }
        ],
        dataset: {
            dimensions: [
                'forks',
                'star',
                'contribuidores',
                'linguagem',
                'pulls',
                'Repositorio'
            ],
            source: data
        },
        series: [
            {   
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 0,
                yAxisIndex: 0,
                encode: {
                    y: 'contribuidores',
                    x: 'star',
                    tooltip: [5, 0, 1, 2, 3, 4]
                }
            },
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 1,
                yAxisIndex: 1,
                encode: {
                    y: 'contribuidores',
                    x: 'linguagem',
                    tooltip: [5, 0, 1, 2, 3, 4],
                }
            },
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 2,
                yAxisIndex: 2,
                encode: {
                    y: 'forks',
                    x: 'star',
                    tooltip: [5, 0, 1, 2, 3, 4]
                }
            },
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 3,
                yAxisIndex: 3,
                encode: {
                    y: 'contribuidores',
                    x: 'pulls',
                    tooltip: [5, 0, 1, 2, 3, 4]
                }
            },
        ]
    };

    myChart.setOption(option)
    })