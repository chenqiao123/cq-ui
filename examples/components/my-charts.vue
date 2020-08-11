<template>
  <div class="line_wrapper" :id="id"></div>
</template>

<script>
import { setData } from "./utli.js";
import echarts from "echarts";
export default {
  name: "CqChartsLine",
  props: {
    id: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    chartType: {
      type: String,
      default: "line"
    },
    lineAreaShow: {
      type: Boolean,
      default: false
    },
    tooltipshow: {
      type: Boolean,
      default: false
    },
    xAxisShow: {
      type: Boolean,
      default: true
    },
    yAxisshow: {
      type: Boolean,
      default: true
    },
    splitLineShow: {
      type: Boolean,
      default: true
    },
    //
    color: {
      type: Array,
      default() {
        return [
          "#c23531",
          "#2f4554",
          "#61a0a8",
          "#d48265",
          "#91c7ae",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3"
        ];
      }
    }
  },
  data() {
    return {
      myChart: null
    };
  },
  mounted() {
    this.drawVVline();
    let _this = this;
    window.addEventListener("resize", function() {
      console.log("resize===========", _this.myChart);
      _this.myChart.resize();
    });
  },
  methods: {
    drawVVline() {
      let xAxisData = [];
      let series = [];
      let _this = this;
      this.data.map((item, index) => {
        let tempdata = setData(item.data);
        let obj = {
          name: item.name,
          data: tempdata.value,
          type: _this.chartType,
          areaStyle: {
            opacity: _this.lineAreaShow ? 1 : 0
          }
        };
        if (index === 0) {
          xAxisData = tempdata.name;
        }

        series.push(obj);
      });
      const option = {
        color: this.color,
        grid: {
          width: "90%",
          left: "5%"
        },
        xAxis: {
          data: xAxisData,
          show: this.xAxisShow,
          axisLine: {
            lineStyle: {
              color: "#626d91"
            }
          },
          axisLabel: {
            color: "#626d91"
          }
        },
        yAxis: {
          type: "value",
          show: this.yAxisshow,
          axisLine: {
            lineStyle: {
              color: "#626d91"
            }
          },
          splitLine: {
            show: this.splitLineShow
          },
          axisLabel: {
            color: "#626d91"
          }
        },
        tooltip: {
          show: true,
          trigger: "axis"
        },
        series: series
      };
      const container = document.getElementById(`${this.id}`);
      const myChart = echarts.init(container);
      this.myChart = myChart;
      myChart.setOption(option);
    }
  },
  watch: {
    data: {
      handler() {
        this.drawVVline();
      },
      deep: true
    }
  }
};
</script>

<style lang="less" scoped>
.line_wrapper {
  width: 100%;
  height: 100%;
}
</style>
