var myChart = echarts.init(document.getElementById('view'));

fetch(`https://raw.githubusercontent.com/DanielVenturini/solid-visualization/master/Data/v4-2.json`)
    .then(response => response.json())
    .then(function(data ){
    var sizeValue = '57%';
    var symbolSize = 2.5;
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
            { type: 'log', gridIndex: 0, name: 'forks' },
            { type: 'log', gridIndex: 1, name: 'contribuidores' },
            { type: 'log', gridIndex: 2, name: 'contribuidores' },
            { type: 'log', gridIndex: 3, name: 'contribuidores' },           
        ],
        xAxis: [
            { type: 'log', gridIndex: 0, name: 'star', axisLabel: { rotate: 50, interval: 0 } },
            { type: 'category', gridIndex: 1, name: 'linguagem', boundaryGap: false, axisLabel: { rotate: 50, interval: 0 } },
            { type: 'log', gridIndex: 2, name: 'star', axisLabel: { rotate: 50, interval: 0 } },
            { type: 'log', gridIndex: 3, name: 'pulls', axisLabel: { rotate: 50, interval: 0 } }
        ],
        dataset: {
            dimensions: [
                'forks',
                'star',
                'contribuidores',
                'linguagem',
                'pulls',
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
                    y: 'forks',
                    x: 'star',
                    tooltip: [0, 1, 2, 3, 4]
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
                    tooltip: [0, 1, 2, 3, 4]
                }
            },
            {
                type: 'scatter',
                symbolSize: symbolSize,
                xAxisIndex: 2,
                yAxisIndex: 2,
                encode: {
                    y: 'contribuidores',
                    x: 'star',
                    tooltip: [0, 1, 2, 3, 4]
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
                    tooltip: [0, 1, 2, 3, 4]
                }
            }
        ]
    };

    myChart.setOption(option)
    })