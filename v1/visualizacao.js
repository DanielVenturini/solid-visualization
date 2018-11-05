var myChart = echarts.init(document.getElementById('main'));

var schema = [
    {name: 'data', index: 0, text: 'Ano criação'},
    {name: 'star', index: 1, text: 'Stars'},
    {name: 'pulr', index: 2, text: 'Linguagem'},
    {name: 'fork', index: 3, text: 'Forks'},
    {name: 'comm', index: 4, text: 'Commits'},
    {name: 'issu', index: 5, text: 'Issues'},
    {name: 'oiss', index: 6, text: 'Open Issues'},
    {name: 'pulr', index: 7, text: 'Pulls Requests'},
    {name: 'lice', index: 8, text: 'Licenca'}
];

var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

option = {
    backgroundColor: '#333',
    legend: {
        bottom: 30,
        data: ['Forks', 'Estrelas', 'Ambos'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj[0].value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj[0].seriesName + ' ' + value[0] + '日期：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>';
        }
    },
    parallelAxis: [
        {dim: 0, name: schema[0].text,
            type: 'category', data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']},
        {dim: 1, name: schema[1].text, inverse: false},//, max: 300000},    // estrela
        {dim: 2, name: schema[2].text,
            type: 'category', data: ['Other', 'PHP', 'C', 'CSS', 'Objective-C', 'Ruby', 'HTML', 'C++', 'Go', 'Python', 'Java', 'JavaScript']},
        {dim: 3, name: schema[3].text, max:  115000},                   // forks
        {dim: 4, name: schema[4].text},//, max:  797000},                   // commits
        {dim: 5, name: schema[5].text},//, max:   58000},                   // issues
        {dim: 6, name: schema[6].text},// max:   13000},                   // open_issues
        {dim: 7, name: schema[7].text},// max:   50000},                   // pull_requests
        {dim: 8, name: schema[8].text,
            type: 'category', data: ['None', 'Mozilla Public License 2.0', 'BSD 2-Clause "Simplified" License', 'Creative Commons Zero v1.0 Universal', 'GNU General Public License v2.0', 'BSD 3-Clause "New" or "Revised" License', 'GNU General Public License v3.0', 'copyright', 'Apache License 2.0', 'Other', 'MIT License']}
    ],
    visualMap: {
        show: true,
        min: 0,
        max: 150,
        dimension: 2,
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
            // colorAlpha: [0, 1]
        }
    },
    parallel: {
        left: '5%',
        right: '18%',
        bottom: 100,
        parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        }
    },
    series: [
        {
            name: 'Forks',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataForks
        },
        {
            name: 'Estrelas',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataEstrelas
        },
        {
            name: 'Ambos',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataAmbos
        }
    ]
};

myChart.setOption(option);