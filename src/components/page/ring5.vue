<template>
    <div ref="ring5" style="height:200px;width:200%"></div>
</template>
<script>
import echarts from 'echarts';
export default {
    props: {
        chartData: {}
    },
    data() {
        return {
            angle: 0,
            myChart: null,
            option: {}
            
        };
    },
    created() {
        
    },
    mounted() {
        this.myChart = echarts.init(this.$refs.ring5);
        let _this = this;
        setInterval(function () {_this.draw();}, 200);
        
    },
    destroyed() {
        this.myChart = null;
    },
    methods: {
        getCirlPoint(x0, y0, r, angle) {
            let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
            let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
            return {
                x: x1,
                y: y1
            };
        },
        getOption(angle,self) {
            return {
                title: {
                    text: '{a|' + this.chartData.value + '}{c|%}',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        rich: {
                            a: {
                                fontSize: 48,
                                color: '#29EEF3'
                            },

                            c: {
                                fontSize: 20,
                                color: '#ffffff'
                                // padding: [5,0]
                            }
                        }
                    }
                },
                legend: {
                    type: 'plain',
                    orient: 'vertical',
                    left:20,
                    
                    top: '30%',
                    align: 'auto',
                    data: [
                        {
                            name: '涨价后没吃过',
                            icon: 'circle'
                        },
                        {
                            name: '天天吃',
                            icon: 'circle'
                        },
                        {
                            name: '三五天吃一次',
                            icon: 'circle'
                        },
                        {
                            name: '半个月吃一次',
                            icon: 'circle'
                        }
                    ],
                    textStyle: {
                        color: 'white',
                        fontSize: 16,
                        padding: [10, 1, 10, 0]
                    },
                    selectedMode: false
                },
                series: [
                    {
                        name: 'ring5',
                        type: 'custom',
                        coordinateSystem: 'none',
                        renderItem: function (params, api) {
                            return {
                                type: 'arc',
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                                    startAngle: ((0 + angle) * Math.PI) / 180,
                                    endAngle: ((90 + angle) * Math.PI) / 180
                                },
                                style: {
                                    stroke: '#0CD3DB',
                                    fill: 'transparent',
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: 'ring5',
                        type: 'custom',
                        coordinateSystem: 'none',
                        renderItem: function (params, api) {
                            return {
                                type: 'arc',
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
                                    startAngle: ((180 + angle) * Math.PI) / 180,
                                    endAngle: ((270 + angle) * Math.PI) / 180
                                },
                                style: {
                                    stroke: '#0CD3DB',
                                    fill: 'transparent',
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: 'ring5',
                        type: 'custom',
                        coordinateSystem: 'none',
                        renderItem: function (params, api) {
                            return {
                                type: 'arc',
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                                    startAngle: ((270 + -angle) * Math.PI) / 180,
                                    endAngle: ((40 + -angle) * Math.PI) / 180
                                },
                                style: {
                                    stroke: '#0CD3DB',
                                    fill: 'transparent',
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: 'ring5',
                        type: 'custom',
                        coordinateSystem: 'none',
                        renderItem: function (params, api) {
                            return {
                                type: 'arc',
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
                                    startAngle: ((90 + -angle) * Math.PI) / 180,
                                    endAngle: ((220 + -angle) * Math.PI) / 180
                                },
                                style: {
                                    stroke: '#0CD3DB',
                                    fill: 'transparent',
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: 'ring5',
                        type: 'custom',
                        coordinateSystem: 'none',
                        renderItem: function (params, api) {
                            let x0 = api.getWidth() / 2;
                            let y0 = api.getHeight() / 2;
                            let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                            let point = self.getCirlPoint(x0, y0, r, 90 + -angle);
                            return {
                                type: 'circle',
                                shape: {
                                    cx: point.x,
                                    cy: point.y,
                                    r: 4
                                },
                                style: {
                                    stroke: '#0CD3DB', //粉
                                    fill: '#0CD3DB'
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: 'ring5', //绿点
                        type: 'custom',
                        coordinateSystem: 'none',
                        renderItem: function (params, api) {
                            let x0 = api.getWidth() / 2;
                            let y0 = api.getHeight() / 2;
                            let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
                            let point = self.getCirlPoint(x0, y0, r, 270 + -angle);
                            return {
                                type: 'circle',
                                shape: {
                                    cx: point.x,
                                    cy: point.y,
                                    r: 4
                                },
                                style: {
                                    stroke: '#0CD3DB', //绿
                                    fill: '#0CD3DB'
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    },
                    {
                        name: '吃猪肉频率',
                        type: 'pie',
                        radius: ['58%', '45%'],
                        silent: true,
                        clockwise: true,
                        startAngle: 90,
                        z: 0,
                        zlevel: 0,
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [
                            {
                                value: this.chartData.value,
                                name: '',
                                itemStyle: {
                                    normal: {
                                        color: {
                                            // 完成的圆环的颜色
                                            colorStops: [
                                                {
                                                    offset: 0,
                                                    color: '#4FADFD' // 0% 处的颜色
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#28E8FA' // 100% 处的颜色
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                value: 100 - this.chartData.value,
                                name: '',
                                label: {
                                    normal: {
                                        show: false
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#173164'
                                    }
                                }
                            }
                        ]
                    },

                    {
                        name: '',
                        type: 'gauge',
                        radius: '58%',
                        center: ['50%', '50%'],
                        startAngle: 0,
                        endAngle: 359.9,
                        splitNumber: 8,
                        hoverAnimation: true,
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            length: 40,
                            lineStyle: {
                                width: 5,
                                color: '#061740'
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                        pointer: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                opacity: 0
                            }
                        },
                        detail: {
                            show: false
                        },
                        data: [
                            {
                                value: 0,
                                name: ''
                            }
                        ]
                    }
                ]
            };
        },
        draw() {
            this.angle = this.angle + 3;
            this.option = this.getOption(this.angle,this);
            this.myChart.setOption(this.option, true);
        }
    }
};
</script>