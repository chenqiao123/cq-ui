<template>
  <div class="line_wrapper" :id="id"></div>
</template>

<script>
export default {
  name: "CqChartsPie",
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
      let legenddata = null;
      this.data.map(item => {
        legenddata = item.data;
        let obj = {
          name: item.name,
          data: item.data,
          radius: ["50%", "70%"],
          center: ["25%", "50%"],
          type: "pie",
          label: {
            show: false,
            position: "center"
          }
        };

        series.push(obj);
      });
      const option = {
        color: this.color,
        legend: {
          type: "scroll",
          orient: "vertical",
          left: "55%",
          textStyle: {
            lineHeight: 30,
            fontSize: 14,
            color: "#626d91"
          },
          top: 80,
          bottom: 50,
          formatter: function(name) {
            let showstr = "";
            legenddata.map(item => {
              if (name === item.name) {
                showstr = name + " " + item.percent + " " + item.value;
              }
            });
            return showstr;
          }
        },

        series: series
      };
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
