

var myChart = echarts.init(document.getElementById('view'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['JavaScript', 'Java', 'Python', 'Go', 'C++', 'HTML', 'Ruby', 'Objective - C', 'CSS', 'C']
    },
    series: [
        {
            name: 'aaaa',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 388, name: 'Estrelas', selected: true },
                { value: 388, name: 'Forks' },
                { value: 612, name: 'Ambos' }
            ]
        },
        {
            name: 'Linguagem',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    shadowBlur:3,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                    shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        abg: {
                            backgroundColor: '#333',
                            width: '100%',
                            align: 'right',
                            height: 22,
                            borderRadius: [4, 4, 0, 0]
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: [
                { value: 324, name: 'JavaScript' },
                { value: 116, name: 'Java' },
                { value: 94, name: 'Python' },
                { value: 48, name: 'Go' },
                { value: 45, name: 'C++' },
                { value: 42, name: 'HTML' },
                { value: 39, name: 'Ruby' },
                { value: 32, name: 'Objective - C' },
                { value: 31, name: 'CSS' },
                { value: 30, name: 'C' },
                
            ]
        }
    ]
}

myChart.setOption(option)