var myChart = echarts.init(document.getElementById('view'));

//     [The Unlicense, 12960, 2156, 1],
//     [GNU Lesser General Public License v2.1, 1217, 23, 1],
//     [Creative Commons Attribution 4.0 International, 136, 123, 2],
//     [GNU Lesser General Public License v3.0, 3136, 769, 1],
//     [BSD 2 - Clause "Simplified" License, 8629, 675, 4],
//     [Mozilla Public License 2.0, 24145, 4623, 5],
//     [BSD 3 - Clause "New" or "Revised" License, 44784, 8772, 11],
//     [GNU General Public License v2.0, 3508, 650, 5],
//     [Creative Commons Zero v1.0 Universal, 481, 43, 4],
//     [copyright, 44737, 16166, 57],
//     [GNU General Public License v3.0, 43931, 7247, 13],
//     [Apache License 2.0, 326493, 53177, 115],
//     [GNU Affero General Public License v3.0, 3084, 942, 1],
//     [Other, 486281, 89023, 161],
//     [MIT License, 538397, 57238, 229],

var test_data = [
{
    "nome": 'MIT License',
    "valor": 90.39,
    "n° projetos": 229
},
{
    "nome": 'Other',
    "valor": 84.52,
    "n° projetos": 161
},
{
    "nome": 'Apache License 2.0',
    "valor": 85.99,
    "n° projetos": 115
},
{
    "nome": 'copyright',
    "valor": 73.45,
    "n° projetos": 57
},
{
    "nome": 'GNU General Public License v3.0',
    "valor": 85.83,
    "n° projetos": 13
},
{
    "nome": 'BSD 3-Clause "New" or "Revised" License',
    "valor": 83.62,
    "n° projetos": 11
},
{
    "nome": 'Mozilla Public License 2.0',
    "valor": 83.93,
    "n° projetos": 5
},
{
    "nome": 'BSD 2-Clause "Simplified" License',
    "valor": 92.75,
    "n° projetos": 4
},
{
    "nome": 'Creative Commons Zero v1.0 Universal',
    "valor": 52.50,
    "n° projetos": 4
}
]
var maxData = 100,
    seriesd = [],
    legend = [];

for (var j in test_data) {
    if (legend.indexOf(test_data[j]["nome"] == -1)) {
        legend.push({
            'icon': 'rect',
            "nome": test_data[j]["nome"]
        });
    }
    var ra = test_data.length - 1 - j;
    seriesd.push({
        name: test_data[j]["nome"],
        type: 'pie',
        radius: [(ra * 5 + 10) + "%", (7 + ra * 5) + "%"],
        itemStyle: {
            normal: {
                label: {
                    show: false
                }
            }
        },
        hoverAnimation: true,
        startAngle: 180,
        center: ["45%", "75%"],
        data: [{
            value: test_data[j]["valor"],
            name: test_data[j]["nome"],
            label: {
                normal: {
                    postion: "center"
                }
            },
        },
        {
            value: maxData - test_data[j]["valor"],
            itemStyle: {
                normal: {
                    color: 'rgba(203,203,203,0.5)',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(203,203,203,1)'
                }
            },
            name: 'showtip_' + test_data[j]["valor"]
        },
        {
            value: maxData,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: true
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            name: 'hide'
        }
        ]
    })
}


var initnum = parseFloat(seriesd[0].data[0]["valor"] * 100 / maxData).toFixed(2);
seriesd.push({
    type: 'gauge',
    z: 3,
    min: 0,
    max: 100,
    splitNumber: 5,
    center: ['45%', '75%'],
    radius: '68%',
    endAngle: 0,
    startAngle: 180,
    axisLabel: {
        formatter: "{value}%"
    },
    axisLine: { 
        lineStyle: {
            color: [
                [1, "rgba(203,203,203,1)"]
            ], 
            width: 2, 
        }
    },
    axisTick: { 
        length: 5, 
        lineStyle: { 
            color: 'auto'
        }
    },
    splitLine: { 
        show: true,
        length: 15, 
        lineStyle: { 
            color: 'auto',
            width: 1
        }
    },
    title: {
        show: false
    },
    detail: {
        show: false,
    },
    pointer: {
        width: 1,
        shadowColor: '#fff', 
    },
    itemStyle: {
        normal: {
            color: "#676767", 
        }
    },
    data: [{
        value: initnum
    }]

})
var option = {
    maxnum: maxData,
    tooltip: {
        show: true,
        formatter: function (params) {
            if (params.name == "hide") {
                return null
            } else {
                if (params.name.indexOf("showtip_") != -1) {
                    var num = Number(params.name);
                } else {
                    var num = params.value;
                }
                if (Number(num) == 0) return params.seriesName + ": " + Number(num) + "";
                return params.seriesName + ": " + parseFloat(num).toFixed(2) + "%";
            }
        }
    },
    legend: {
        itemGap: 5,
        orient: 'vertical',
        align: "left",
        x: 'right',
        itemWidth: 12,
        itemHeight: 10,
        data: legend
    },
    grid: {
        top: 8,
        height: 10,
        left: "25%",
        right: '15%',
    },
    series: seriesd
};
myChart.on('mouseover', function (params) {
    if (params.name != "hide") {
        if (params.name.indexOf("showtip_") != -1) {
            var shownum = parseFloat(params.name.split("_")[1] * 100 / myChart.getOption().maxnum).toFixed(2);
        } else {
            var shownum = parseFloat(params.value * 100 / myChart.getOption().maxnum).toFixed(2);
        }
        var series = myChart.getOption().series;
        option.series[series.length - 1].data[0].value = shownum;
        myChart.setOption(option, true);
    }
});

myChart.setOption(option)