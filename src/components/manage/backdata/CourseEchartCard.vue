<template>
  <el-container class="statistic_top">
    <el-card id="pie" class="pie"/>
    <el-card id="line" class="line"/>
  </el-container>
  <el-container class="statistic_bottom">
    <el-card id="bar" class="bar"/>
    <el-card id="radar" class="radar"/>
  </el-container>
  <el-container class="statistic_mix">
    <el-card id="mix" class="mix"/>
  </el-container>
</template>

<script setup>
import {initChart} from "../../../api/echart";
import {onMounted, toRaw} from "vue";
import {useStore} from "vuex";
const store = useStore();
onMounted(async () => {
    store.state.managerStore.fields = [];
    await store.dispatch("handlequeryFields", toRaw({})).then((fields) => {
        store.state.managerStore.fields = fields;
    })
    const fields = [];
    const f_names = [];
    const f_nums = [];
    const f_nums_t = [];
    const c_name = [];
    for(let i in store.state.managerStore.fields){
        f_names.push(store.state.managerStore.fields[i].field_name);
        fields.push({value: store.state.managerStore.fields[i].classes.length, name: store.state.managerStore.fields[i].field_name});
        f_nums.push(store.state.managerStore.fields[i].classes.length);
        f_nums_t.push(store.state.managerStore.fields[i].classes.length - 1)
    }
    for(let i in store.state.managerStore.classes){
        c_name.push(store.state.managerStore.classes[i].class_name);
    }
    const option_pie = {
        title: {
            text: "领域占比",
        },
        legend: {
            x: 'right',
            data: f_names
        },
        tooltip: {},
        series: [
            {
                type: 'pie',
                data: fields
            }
        ]
    };
    const option_line = {
        title: {
            text: "各领域每天的数据变化"
        },
        xAxis: {
            data: f_names
        },
        yAxis: {},
        tooltip: {
            trigger: 'axis',
            show: true,
            // 自定义修改悬浮内容
            formatter: function (params) {
                let result = '';
                params.forEach(function (item) {
                    result +=
                        '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
                        item.color +
                        '"></span>';
                    if (item.seriesIndex == 0) {
                        result += '昨日数据：' + '<b>' + item.value + '</b>' + '<br>';
                    }
                    if (item.seriesIndex == 1) {
                        result += '今日增加：' + '<b>' + item.value + '</b>';
                    }
                });
                return result;
            }
        },
        legend: {
            x: 'right',
            data: ['昨日数据', '今日数据']
        },
        series: [
            {
                name: "昨日数据",
                data: f_nums_t,
                type: 'line',
                stack: 'x',
                areaStyle: {}
            },
            {
                name: "今日数据",
                data: f_nums,
                type: 'line',
                stack: 'x',
                areaStyle: {}
            }
        ]
    };
    const option_bar = {
        title: {
            text: "各类用户每个月的数据变化"
        },
        xAxis: {
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {},
        tooltip: {
            trigger: 'axis',
            show: true,
            // 自定义修改悬浮内容
            formatter: function (params) {
                let result = '';
                params.forEach(function (item) {
                    result +=
                        '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
                        item.color +
                        '"></span>';
                    if (item.seriesIndex == 0) {
                        result += '注册用户' + '<b>' + item.value + '</b>' + '<br>';
                    }
                    if (item.seriesIndex == 1) {
                        result += '讲师用户：' + '<b>' + item.value + '</b>' + '<br>';
                    }
                    if (item.seriesIndex == 2) {
                        result += '访客用户：' + '<b>' + item.value + '</b>' + '<br>';
                    }
                    if (item.seriesIndex == 3) {
                        result += '其他用户：' + '<b>' + item.value + '</b>';
                    }
                });
                return result;
            }
        },
        legend: {
            x: 'right',
            data: ['注册用户', '讲师用户', '访客用户', '其他用户']
        },
        series: [
            {
                name: "注册用户",
                data: [83, 77, 109, 100, 111, 103, 120, 90, 85, 87, 91, 73],
                type: 'line',
                smooth: true,
                stack: 'x',
            },
            {
                name: "讲师用户",
                data: [35, 43, 56, 30, 29, 45, 42, 44, 38, 56, 45, 30],
                type: 'line',
                smooth: true,
                stack: 'x'
            },
            {
                name: "访客用户",
                data: [85, 74, 102, 90, 101, 113, 100, 80, 80, 84, 92, 75],
                type: 'line',
                smooth: true,
                stack: 'x'
            },
            {
                name: "其他用户",
                data: [36, 33, 46, 30, 39, 41, 46, 40, 39, 52, 45, 34],
                type: 'line',
                smooth: true,
                stack: 'x'
            }
        ]
    };
    const option_radar = {
        title: {
            text: 'Basic Radar Chart'
        },
        legend: {
            x: 'right',
            data: ['Allocated Budget', 'Actual Spending']
        },
        tooltip: {},
        radar: {
            indicator: [
                {name: 'Sales'},
                {name: 'Administration'},
                {name: 'Information Technology'},
                {name: 'Customer Support'},
                {name: 'Development'},
                {name: 'Marketing'}
            ]
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [42, 30, 20, 35, 50, 180],
                        name: 'Allocated Budget'
                    },
                    {
                        value: [50, 140, 28, 26, 42, 21],
                        name: 'Actual Spending'
                    }
                ]
            }
        ]
    };
    const option_mix = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['Evaporation', 'Precipitation', 'Temperature']
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Precipitation',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: 'Temperature',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name: 'Evaporation',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' ml';
                    }
                },
                data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                ]
            },
            {
                name: 'Precipitation',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' ml';
                    }
                },
                data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                ]
            },
            {
                name: 'Temperature',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' °C';
                    }
                },
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };
    initChart(option_pie, 'pie');
    initChart(option_line, 'line');
    initChart(option_bar, "bar");
    initChart(option_radar, "radar");
    initChart(option_mix, "mix")
})
</script>

<style lang="scss" scoped>
.statistic_top{
  display: flex;
  height: 50vh;
  .pie{
    width: 36%;
    height: 100%;
  }
  .line{
    width: 64%;
    height: 100%;
    margin-left: 2%;
  }
}
.statistic_bottom{
  height: 50vh;
  margin-top: 20px;
  .bar{
    width: 64%;
    height: 100%;
  }
  .radar{
    width: 36%;
    height: 100%;
    margin-left: 2%;
  }
}
.statistic_mix{
  height: 70vh;
  margin-top: 20px;
  .mix{
    width: 100%;
    height: 100%;
  }
}
</style>