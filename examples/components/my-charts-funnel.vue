<template>
  <div class="line_wrapper" :id="id"></div>
</template>

<script>
export default {
  name: "CqChartsFunnel",
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
      let series = [];

      this.data.map(item => {
        let obj = {
          name: item.name,
          type: "funnel",
          left: "10%",
          top: 60,
          //x2: 80,
          bottom: 60,
          width: "80%",
          // height: {totalHeight} - y - y2,
          // min: 0,
          // max: 100,
          // minSize: "0%",
          // maxSize: "100%",
          sort: "descending",
          gap: 2,
          label: {
            show: true,
            position: "inside",
            textStyle: {
              color: " #626d91"
            }
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: "solid"
            }
          },
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1
          },
          emphasis: {
            label: {
              fontSize: 20
            }
          },
          data: item.data
        };

        series.push(obj);
      });
      const option = {
        color: this.color,
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%"
        },

        legend: {},

        series: series
      };
      console.log("option====");
      const container = document.getElementById(`${this.id}`);
      const myChart = this.$echarts.init(container);
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
