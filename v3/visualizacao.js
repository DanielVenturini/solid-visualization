// CORES => https://www.color-hex.com/
var fuchsia = '#FF00FF'
var fundoCalendario = '#FFFF00'
var linhaMes = '#000'
var linhaDia = '#FF00FF'

var myChart = echarts.init(document.getElementById('main'));

function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }

    console.log(data)
    return data;
}

var data = getVirtulData(2016);

option = {
    backgroundColor: '#EFFFFF',

    title: {
        top: 30,
        text: 'Atividades no último ano',
        subtext: '30 primeiros x 30 últimos',
        left: 'center',
        textStyle: {
            color: '#000'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        top: '30',
        left: '100',
        data:['Normal', 'Alta atividade'],
        textStyle: {
            color: '#000'
        }
    },
    calendar: [{
        top: 100,
        left: 'center',
        range: ['2017-11-25', '2018-11-20'],
        splitLine: {
            show: true,
            lineStyle: {
                color: linhaMes,
                width: 4,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '2008',
            textStyle: {
                color: '#000'
            }
        },
        itemStyle: {
            normal: {
                color: fundoCalendario,
                borderWidth: 1,
                borderColor: linhaDia
            }
        }
    }, {
        top: 340,
        left: 'center',
        range: ['2017-11-25', '2018-11-20'],
        splitLine: {
            show: true,
            lineStyle: {
                color: linhaMes,
                width: 4,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '2017',
            textStyle: {
                color: '#000'
            }
        },
        itemStyle: {
            normal: {
                color: fundoCalendario,
                borderWidth: 1,
                borderColor: linhaDia
            }
        }
    }],
    series : [
        {
            name: 'Normal',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: dadosAntigosNormal,
            symbolSize: function (val) {
                return val[1] / 5;
            },
            itemStyle: {
                normal: {
                    color: fuchsia
                }
            }
        },
        {
            name: 'Normal',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: dadosNovosNormal,
            symbolSize: function (val) {
                return val[1] / 5;
            },
            itemStyle: {
                normal: {
                    color: fuchsia
                }
            }
        },
        {
            name: 'Alta atividade',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: dadosNovosAltaAtividade,
            symbolSize: function (val) {
                return val[1] / 5;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: fuchsia,
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            name: 'Alta atividade',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: dadosAntigosAltaAtividade,
            symbolSize: function (val) {
                return val[1] / 5;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: fuchsia,
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

myChart.setOption(option);