// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('main'));

// specify chart configuration item and data
option = {
    backgroundColor: '#2c343c',

    title: {
        text: 'Grafico Luizao',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'nome',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:1, name:"Rascal"},
                {value:4, name:"CoffeeScript"},
                {value:1, name:"QML"},
                {value:5, name:"Lua"},
                {value:3, name:"Objective-C++"},
                {value:1, name:"VimL"},
                {value:2, name:"Assembly"},
                {value:380, name:"JavaScript"},
                {value:24, name:"PHP"},
                {value:6, name:"Scala"},
                {value:1, name:"Emacs Lisp"},
                {value:9, name:"Vue"},
                {value:1, name:"Perl"},
                {value:35, name:"Ruby"},
                {value:34, name:"Objective-C"},
                {value:11, name:"Jupyter Notebook"},
                {value:33, name:"HTML"},
                {value:29, name:"TypeScript"},
                {value:3, name:"TeX"},
                {value:12, name:"Vim script"},
                {value:1, name:"Batchfile"},
                {value:1, name:"Crystal"},
                {value:1, name:"Dart"},
                {value:24, name:"Shell"},
                {value:59, name:"Go"},
                {value:2, name:"Elixir"},
                {value:3, name:"Haskell"},
                {value:1, name:"Dockerfile"},
                {value:29, name:"Swift"},
                {value:10, name:"Kotlin"},
                {value:1, name:"Matlab"},
                {value:30, name:"CSS"},
                {value:2, name:"Clojure"},
                {value:39, name:"C++"},
                {value:2, name:"OCaml"},
                {value:1, name:"Julia"},
                {value:82, name:"Python"},
                {value:6, name:"Rust"},
                {value:1, name:"Makefile"},
                {value:24, name:"C"},
                {value:10, name:"C#"},
                {value:76, name:"Java"}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

// use configuration item and data specified to show chart
myChart.setOption(option);