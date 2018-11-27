var myChart = echarts.init(document.getElementById('view'));

var test_data = [
{
    "nome": 'Ruby',
    "valor": 94.77,
    "nproj": 26
},
{
    "nome": 'Swift',
    "valor": 94.05,
    "nproj": 13
},
{
    "nome": 'PHP',
    "valor": 92.82,
    "nproj": 16
},
{
    "nome": 'CSS',
    "valor": 91.64,
    "nproj": 22
},
{
    "nome": 'TypeScript',
    "valor": 87.60,
    "nproj": 14
},
{
    "nome": 'Java',
    "valor": 87.60,
    "nproj": 70
},
{
    "nome": 'JavaScript',
    "valor": 87.57,
    "nproj": 193
},
{
    "nome": 'Go',
    "valor": 87.36,
    "nproj": 30
},
{
    "nome": 'C++',
    "valor": 85.27,
    "nproj": 31
},
{
    "nome": 'Python',
    "valor": 81.54,
    "nproj": 62
},
{
    "nome": 'HTMl',
    "valor": 81.35,
    "nproj": 23
},
{
    "nome": 'Objective-C',
    "valor": 80.42,
    "nproj": 21
},
{
    "nome": 'Shell',
    "valor": 79.42,
    "nproj": 7
},
{
    "nome": 'C',
    "valor": 73.25,
    "nproj": 16
},
{
    "nome": 'Jupyter Notebook',
    "valor": 59.27,
    "nproj": 9
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
        nproj: test_data[j]["nproj"],
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
            nproj: test_data[j]["nproj"],
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
                    color: 'rgba(0, 0, 0, 0.7)'
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


var initnum = parseFloat(seriesd[0].data[0]["valor"] * 100 / maxData).toFixed(2)
var numProj = parseFloat(seriesd[0].data[0]["nproj"] * 100 / maxData).toFixed(3)

seriesd.push({
    type: 'gauge',
    z: 3,
    min: 0,
    max: 100,
    splitNumber: 5,
    center: ['45%', '75%'],
    radius: '100%',
    endAngle: 0,
    startAngle: 180,
    axisLabel: {
        formatter: "{value}%"
    },
    axisLine: { 
        lineStyle: {
            color: [
                [1, "rgba(0, 0, 0,1)"]
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
            color: "#000000", 
        }
    },
    data: [{
        value: initnum,
        value2: numProj
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

                if (Number(num) == 0) 
                    return params.seriesName + ": " + Number(num) + "";
                else
                    return params.seriesName + ": " + parseFloat(num).toFixed(2) + "%<br/>N° projetos: " + params.data.nproj;
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